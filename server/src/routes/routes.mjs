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
    const [coursesTable] = await database.execute("SELECT * FROM Student");
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
router.get("/students-by-course/:courseId", async (req, res) => {
  try {
    const database = await connection;
    const { courseId } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Student.UIN AS student_uin,
        Student.name AS student_name,
        Student.email AS student_email,
        Courses.course_id AS course_id,
        Courses.course_name AS course_name
      FROM 
        Student
      JOIN 
        Takes ON Student.UIN = Takes.student_id
      JOIN 
        Courses ON Takes.course_id = Courses.course_id
      WHERE 
        Courses.course_id = ?`,
      [courseId]
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
router.get("/courses-by-student/:studentId", async (req, res) => {
  try {
    const database = await connection;
    const { studentId } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Courses.course_id AS course_id,
        Courses.course_name AS course_name,
        Student.UIN AS student_uin,
        Student.name AS student_name
      FROM 
        Courses
      JOIN 
        Takes ON Courses.course_id = Takes.course_id
      JOIN 
        Student ON Takes.student_id = Student.UIN
      WHERE 
        Student.UIN = ?`,
      [studentId]
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
router.get("/courses-by-instructor/:instructorId", async (req, res) => {
  try {
    const database = await connection;
    const { instructorId } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Courses.course_id AS course_id,
        Courses.course_name AS course_name,
        Instructor.UIN AS instructor_uin,
        Instructor.name AS instructor_name
      FROM 
        Courses
      JOIN 
        Teaches ON Courses.course_id = Teaches.course_id
      JOIN 
        Instructor ON Teaches.inst_id = Instructor.UIN
      WHERE 
        Instructor.UIN = ?`,
      [instructorId]
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
router.get("/courses-by-department/:departmentId", async (req, res) => {
  try {
    const database = await connection;
    const { departmentId } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Courses.course_id AS course_id,
        Courses.course_name AS course_name,
        Department.dept_id AS department_id,
        Department.dept_name AS department_name
      FROM 
        Courses
      JOIN 
        Department ON Courses.dept_name = Department.dept_name
      WHERE 
        Department.dept_id = ?`,
      [departmentId]
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

router.get("/students-by-department/:departmentId", async (req, res) => {
  try {
    const database = await connection;
    const { departmentId } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Student.UIN AS student_uin,
        Student.name AS student_name,
        Student.email AS student_email,
        Department.dept_id AS department_id,
        Department.dept_name AS department_name
      FROM 
        Student
      JOIN 
        Courses ON Courses.admin_id = Student.admin_id
      JOIN 
        Department ON Courses.dept_name = Department.dept_name
      WHERE 
        Department.dept_id = ?`,
      [departmentId]
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

router.get("/students-by-department/:departmentId", async (req, res) => {
  try {
    const database = await connection;
    const { departmentId } = req.params;

    const [results] = await database.execute(
      `SELECT 
        Student.UIN AS student_uin,
        Student.name AS student_name,
        Student.email AS student_email,
        Department.dept_id AS department_id,
        Department.dept_name AS department_name
      FROM 
        Student
      JOIN 
        Courses ON Courses.admin_id = Student.admin_id
      JOIN 
        Department ON Courses.dept_name = Department.dept_name
      WHERE 
        Department.dept_id = ?`,
      [departmentId]
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


// fetching all courses wit their prerequisites

router.get("/prereqs-by-course/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;
    const [results] = await connection.execute(
      `SELECT 
        Prereq.course_id AS prereq_course_id,
        Prereq.course_name AS prereq_course_name,
        Main.course_id AS course_id,
        Main.course_name AS course_name
      FROM 
        Courses AS Main
      JOIN 
        Courses AS Prereq ON Main.prereq_id = Prereq.course_id
      WHERE 
        Main.course_id = ?`,
      [courseId]
    );
    res.json(results);
  } catch (error) {
    console.error("Error fetching prerequisites by course:", error);
    res.status(500).send("Error fetching prerequisites by course");
  }
});

export default router;