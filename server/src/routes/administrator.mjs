import connection from "../database_connection/database_connection.mjs";

export async function fetchAdministrators(req, res) {
  try {
    const database = await connection;
    const [administrators] = await database.execute(
      "SELECT * FROM Administrator"
    );
    res.json(administrators);
  } catch (error) {
    console.error("Error fetching administrators:", error);
    res.status(500).send("Error fetching administrators");
  }
}

export async function fetchDepartments(req, res) {
  try {
    const database = await connection;
    const [departments] = await database.execute("SELECT * FROM Department");
    res.json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).send("Error fetching departments");
  }
}

export async function fetchInstructors(req, res) {
  try {
    const database = await connection;
    const [instructors] = await database.execute("SELECT * FROM Instructor");
    res.json(instructors);
  } catch (error) {
    console.error("Error fetching instructors:", error);
    res.status(500).send("Error fetching instructors");
  }
}

export async function fetchCourses(req, res) {
  try {
    const database = await connection;
    const [courses] = await database.execute("SELECT * FROM Courses");
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).send("Error fetching courses");
  }
}

export async function fetchStudents(req, res) {
  try {
    const database = await connection;
    const [students] = await database.execute("SELECT * FROM Student");
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Error fetching students");
  }
}

export async function fetchRegistrations(req, res) {
  try {
    const database = await connection;
    const [students] = await database.execute("SELECT * FROM Takes");
    res.json(students);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).send("Error fetching registrations");
  }
}

export async function fetchTeachings(req, res) {
  try {
    const database = await connection;
    const [students] = await database.execute("SELECT * FROM Teaches");
    res.json(students);
  } catch (error) {
    console.error("Error fetching teachings:", error);
    res.status(500).send("Error fetching teachings");
  }
}
