import connection from "../database_connection/database_connection.mjs";

export async function Courses(req, res) {
  try {
    const database = await connection;
    const [courseTable] = await database.execute("SELECT * FROM Courses");
    res.json(courseTable);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).send("Error fetching courses");
  }
}

export async function CoursesByStudent(req, res) {
  try {
    const database = await connection;
    const { student_id } = req.params;

    const [results] = await database.execute(
      `SELECT
        Courses.course_id AS course_id,
        Courses.course_name AS course_name,
        Student.student_id AS student_id,
        Student.student_username AS student_username
      FROM
        Courses
      JOIN
        Takes ON Courses.course_id = Takes.course_id
      JOIN
        Student ON Takes.student_id = Student.student_id
      WHERE
        Student.student_id = ?`,
      [student_id]
    );

    if (results.length === 0) {
      return res.status(404).send("No courses found for the specified student");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching courses by student ID:", error);
    res.status(500).send("Error fetching courses by student ID");
  }
}

export async function CoursesWithPrerequisites(req, res) {
  try {
    const database = await connection;

    const [results] = await database.execute(
      `SELECT
              c1.course_id AS course_id,
              c1.course_name AS course_name,
              c2.course_id AS prerequisite_course_id,
              c2.course_name AS prerequisite_course_name
          FROM
              Courses c1
          LEFT JOIN
              Courses c2
          ON
              c1.prerequisite_course_id = c2.course_id`
    );

    if (results.length === 0) {
      return res.status(404).send("No courses found.");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching courses with prerequisites:", error);
    res.status(500).send("Error fetching courses with prerequisites.");
  }
}

export async function RegisterCourse(req, res) {
  const { student_id, course_id } = req.body;

  try {
    const database = await connection;

    await database.beginTransaction();

    const [course] = await database.execute(
      `SELECT course_available_seats FROM Courses WHERE course_id = ?`,
      [course_id]
    );

    if (course.length === 0) {
      await database.rollback();
      return res.status(404).json({ message: "Course not found." });
    }

    const availableSeats = course[0].course_available_seats;

    if (availableSeats <= 0) {
      await database.rollback();
      return res
        .status(400)
        .json({ message: "No seats available for this course." });
    }

    await database.execute(
      `INSERT INTO Takes (student_id, course_id) VALUES (?, ?)`,
      [student_id, course_id]
    );

    await database.execute(
      `UPDATE Courses SET course_available_seats = course_available_seats - 1 WHERE course_id = ?`,
      [course_id]
    );

    await database.commit();

    res.json({ message: "Course registered successfully." });
  } catch (error) {
    console.error("Error registering course:", error);

    if (database && database.rollback) {
      await database.rollback();
    }

    res.status(500).json({ message: "Error registering course." });
  }
}
