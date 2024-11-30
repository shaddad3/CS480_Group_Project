import express from "express";
import connection from "../database_connection/database_connection.mjs";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const database = await connection;
    const [administratorTable] = await database.execute(
      "SELECT * FROM Administrator"
    );
    const [departmentTable] = await database.execute(
      "SELECT * FROM Department"
    );
    const [instructorTable] = await database.execute(
      "SELECT * FROM Instructor"
    );
    const [coursesTable] = await database.execute("SELECT * FROM Courses");
    const [teachesTable] = await database.execute("SELECT * FROM Teaches");
    const [studentTable] = await database.execute("SELECT * FROM Student");
    const [takesTable] = await database.execute("SELECT * FROM Takes");

    res.json({
      administratorTable,
      departmentTable,
      instructorTable,
      coursesTable,
      teachesTable,
      studentTable,
      takesTable,
    });
  } catch (error) {
    console.error("Error fetching all tables:", error);
    res.status(500).send("Error fetching all tables");
  }
});

// Fetch all Students
router.get("/student", async (req, res) => {
  try {
    const database = await connection;
    const [studentTable] = await database.execute("SELECT * FROM Student");
    res.json(studentTable);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Error fetching students");
  }
});

// Fetch a Student by ID
router.get("/student/:id", async (req, res) => {
  try {
    const database = await connection;
    const { id } = req.params;
    const [studentTable] = await database.execute("SELECT * FROM Student WHERE student_id = ?", [id]);
    if (studentTable.length === 0) {
      return res.status(404).send("Student not found");
    }
    res.json(studentTable[0]);
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).send("Error fetching student by ID");
  }
});

// Fetch all Instructors
router.get("/instructor", async (req, res) => {
  try {
    const database = await connection;
    const [instructorTable] = await database.execute("SELECT * FROM Instructor");
    res.json(instructorTable);
  } catch (error) {
    console.error("Error fetching instructors:", error);
    res.status(500).send("Error fetching instructors");
  }
});

// Fetch an Instructor by ID
router.get("/instructor/:id", async (req, res) => {
  try {
    const database = await connection;
    const { id } = req.params;
    const [instructorTable] = await database.execute("SELECT * FROM Instructor WHERE instructor_id = ?", [id]);
    if (instructorTable.length === 0) {
      return res.status(404).send("Instructor not found");
    }
    res.json(instructorTable[0]);
  } catch (error) {
    console.error("Error fetching instructor by ID:", error);
    res.status(500).send("Error fetching instructor by ID");
  }
});

// Fetch all Courses
router.get("/courses", async (req, res) => {
  try {
    const database = await connection;
    const [courseTable] = await database.execute("SELECT * FROM Courses");
    res.json(courseTable);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).send("Error fetching courses");
  }
});

// Fetch a Course by ID
router.get("/courses/:id", async (req, res) => {
  try {
    const database = await connection;
    const { id } = req.params;
    const [courseTable] = await database.execute("SELECT * FROM Courses WHERE course_id = ?", [id]);
    if (courseTable.length === 0) {
      return res.status(404).send("Course not found");
    }
    res.json(courseTable[0]);
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    res.status(500).send("Error fetching course by ID");
  }
});

// Fetch all Teaches
router.get("/teaches", async (req, res) => {
  try {
    const database = await connection;
    const [teachesTable] = await database.execute("SELECT * FROM Teaches");
    res.json(teachesTable);
  } catch (error) {
    console.error("Error fetching teaches:", error);
    res.status(500).send("Error fetching teaches");
  }
});

// Fetch a Teaches record by ID
router.get("/teaches/:id", async (req, res) => {
  try {
    const database = await connection;
    const { id } = req.params;
    const [teachesTable] = await database.execute("SELECT * FROM Teaches WHERE id = ?", [id]);
    if (teachesTable.length === 0) {
      return res.status(404).send("Teaches record not found");
    }
    res.json(teachesTable[0]);
  } catch (error) {
    console.error("Error fetching teaches record by ID:", error);
    res.status(500).send("Error fetching teaches record by ID");
  }
});

// Fetch all Departments
router.get("/department", async (req, res) => {
  try {
    const database = await connection;
    const [departmentTable] = await database.execute("SELECT * FROM Department");
    res.json(departmentTable);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).send("Error fetching departments");
  }
});

// Fetch a Department by ID
router.get("/department/:id", async (req, res) => {
  try {
    const database = await connection;
    const { id } = req.params;
    const [departmentTable] = await database.execute("SELECT * FROM Department WHERE department_id = ?", [id]);
    if (departmentTable.length === 0) {
      return res.status(404).send("Department not found");
    }
    res.json(departmentTable[0]);
  } catch (error) {
    console.error("Error fetching department by ID:", error);
    res.status(500).send("Error fetching department by ID");
  }
});

/// Fetching all students who have taken a specific course
router.get("/students-by-course/:course_id", async (req, res) => {
  try {
    const database = await connection;
    const { course_id } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Student.student_id AS student_id,
        Student.student_username AS student_username,
        Student.student_email AS student_email,
        Courses.course_id AS course_id,
        Courses.course_name AS course_name
      FROM 
        Student
      JOIN 
        Takes ON Student.student_id = Takes.student_id
      JOIN 
        Courses ON Takes.course_id = Courses.course_id
      WHERE 
        Courses.course_id = ?`,
      [course_id]
    );

    if (results.length === 0) {
      return res.status(404).send("No students found for the specified course");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching students by course:", error);
    res.status(500).send("Error fetching students by course");
  }
});

// Fetching all courses taken by a specific student 
router.get("/courses-by-student/:student_id", async (req, res) => {
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
});

// Fetching all courses taught by a specific instructor
router.get("/courses-by-instructor/:instructor_id", async (req, res) => {
  try {
    const database = await connection;
    const { instructor_id } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Courses.course_id AS course_id,
        Courses.course_name AS course_name,
        Instructor.instructor_id AS instructor_id,
        Instructor.instructor_username AS instructor_username
      FROM 
        Courses
      JOIN 
        Teaches ON Courses.course_id = Teaches.course_id
      JOIN 
        Instructor ON Teaches.instructor_id = Instructor.instructor_id
      WHERE 
        Instructor.instructor_id = ?`,
      [instructor_id]
    );

    if (results.length === 0) {
      return res.status(404).send("No courses found for the specified instructor");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching courses by instructor ID:", error);
    res.status(500).send("Error fetching courses by instructor ID");
  }
});

// Fetching all courses offered by a specific department
router.get("/courses-by-department/:department_id", async (req, res) => {
  try {
    const database = await connection;
    const { department_id } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Courses.course_id AS course_id,
        Courses.course_name AS course_name,
        Department.department_id AS department_id,
        Department.department_name AS department_name
      FROM 
        Courses
      JOIN 
        Department ON Courses.department_id = Department.department_id
      WHERE 
        Department.department_id = ?`,
      [department_id]
    );

    if (results.length === 0) {
      return res.status(404).send("No courses found for the specified department");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching courses by department ID:", error);
    res.status(500).send("Error fetching courses by department ID");
  }
});



// Fetching all students in a department

router.get("/students-by-department/:department_id", async (req, res) => {
  try {
    const database = await connection;
    const { department_id } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Student.student_id AS student_id,
        Student.student_username AS student_username,
        Student.student_email AS student_email,
        Department.department_id AS department_id,
        Department.department_name AS department_name
      FROM 
        Student
      JOIN 
        Courses ON Courses.administrator_id = Student.administrator_id
      JOIN 
        Department ON Courses.department_id = Department.department_id
      WHERE 
        Department.department_id = ?`,
      [department_id]
    );

    if (results.length === 0) {
      return res.status(404).send("No students found for the specified department");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching students by department:", error);
    res.status(500).send("Error fetching students by department");
  }
});


// fetching all instructors in a department

router.get("/students-by-department/:department_id", async (req, res) => {
  try {
    const database = await connection;
    const { department_id } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Student.student_id AS student_id,
        Student.student_username AS student_name,
        Student.student_email AS student_email,
        Department.department_id AS department_id,
        Department.department_name AS department_name
      FROM 
        Student
      JOIN 
        Courses ON Courses.administrator_id = Student.administrator_id
      JOIN 
        Department ON Courses.department_name = Department.department_name
      WHERE 
        Department.department_id = ?`,
      [department_id]
    );

    if (results.length === 0) {
      return res.status(404).send("No students found for the specified department");
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching students by department:", error);
    res.status(500).send("Error fetching students by department");
  }
});

//fetching the courses along with their pre requisites

router.get("/courses-with-prerequisites/:course_id", async (req, res) => {
  try {
      const database = await connection;
      const { course_id } = req.params;

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
              c1.prerequisite_course_id = c2.course_id
          WHERE 
            c1.course_id = ?`,
          [course_id]
      );

      if (results.length === 0) {
          return res.status(404).send("No courses found.");
      }

      res.json(results);
  } catch (error) {
      console.error("Error fetching courses with prerequisites:", error);
      res.status(500).send("Error fetching courses with prerequisites.");
  }
});

export default router;