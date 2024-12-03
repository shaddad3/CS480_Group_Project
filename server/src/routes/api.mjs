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

export async function fetchTakes(req, res) {
  try {
    const database = await connection;
    const [students] = await database.execute("SELECT * FROM Takes");
    res.json(students);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).send("Error fetching registrations");
  }
}

export async function fetchTeaches(req, res) {
  try {
    const database = await connection;
    const [students] = await database.execute("SELECT * FROM Teaches");
    res.json(students);
  } catch (error) {
    console.error("Error fetching teachings:", error);
    res.status(500).send("Error fetching teachings");
  }
}

export async function fetchTakesForStudent(req, res) {
  try {
    const database = await connection;
    const { student_id } = req.params;

    const [results] = await database.execute(
      `SELECT * FROM Takes WHERE student_id = ?`,
      [student_id]
    );

    res.json(results);
  } catch (error) {
    console.error("Error fetching courses by student ID:", error);
    res.status(500).send("Error fetching courses by student ID");
  }
}

/**************************************************************************************************************************/

export async function addDepartment(req, res) {
  const {
    department_name,
    department_head_first_name,
    department_head_last_name,
  } = req.body;
  try {
    const database = await connection;
    await database.execute(
      "INSERT INTO Department (department_name, department_head_first_name, department_head_last_name) VALUES (?, ?, ?)",
      [department_name, department_head_first_name, department_head_last_name]
    );
    res.status(201).send("Department added successfully");
  } catch (error) {
    console.error("Error adding department:", error);
    res.status(500).send("Error adding department");
  }
}

export async function addInstructor(req, res) {
  const {
    instructor_username,
    instructor_password,
    instructor_first_name,
    instructor_last_name,
    instructor_email,
    administrator_id,
    department_id,
  } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `INSERT INTO Instructor (instructor_username, instructor_password, instructor_first_name, instructor_last_name, instructor_email, administrator_id,department_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        instructor_username,
        instructor_password,
        instructor_first_name,
        instructor_last_name,
        instructor_email,
        administrator_id,
        department_id,
      ]
    );
    res.status(201).send("Instructor added successfully");
  } catch (error) {
    console.error("Error adding instructor:", error);
    res.status(500).send("Error adding instructor");
  }
}

export async function addCourse(req, res) {
  const {
    course_name,
    course_description,
    course_credit_hours,
    prerequisite_course_id,
    department_id,
    instructor_id,
  } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `INSERT INTO Courses (course_name, course_description, course_credit_hours, prerequisite_course_id, department_id, instructor_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        course_name,
        course_description,
        course_credit_hours,
        prerequisite_course_id,
        department_id,
        instructor_id,
      ]
    );
    res.status(201).send("Course added successfully");
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).send("Error adding course");
  }
}

export async function addStudent(req, res) {
  const {
    student_username,
    student_password,
    student_first_name,
    student_last_name,
    student_email,
    department_id,
  } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `INSERT INTO Student (student_username, student_password, student_first_name, student_last_name, student_email, department_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        student_username,
        student_password,
        student_first_name,
        student_last_name,
        student_email,
        department_id,
      ]
    );
    res.status(201).send("Student added successfully");
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).send("Error adding student");
  }
}

export async function addTake(req, res) {
  const { student_id, course_id } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `INSERT INTO Takes (student_id, course_id) VALUES (?, ?)`,
      [student_id, course_id]
    );

    res.json({ message: "Course registered successfully." });
  } catch (error) {
    console.error("Error registering course:", error);
    res.status(500).json({ message: "Error registering course." });
  }
}

export async function addTeach(req, res) {
  const { instructor_id, course_id } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `INSERT INTO Teaches (instructor_id, course_id) VALUES (?, ?)`,
      [instructor_id, course_id]
    );

    res.json({ message: "Teaching added successfully." });
  } catch (error) {
    console.error("Error adding teaching:", error);
    res.status(500).json({ message: "Error adding teaching." });
  }
}

/**************************************************************************************************************************/
export async function removeDepartment(req, res) {
  const { department_id } = req.body;
  try {
    const database = await connection;
    await database.execute(`DELETE FROM Department WHERE department_id = ?`, [
      department_id,
    ]);
    res.json({ message: "Department removed successfully." });
  } catch (error) {
    console.error("Error removing department:", error);
    res.status(500).json({ message: "Error removing department." });
  }
}

export async function removeInstructor(req, res) {
  const { instructor_id } = req.body;
  try {
    const database = await connection;
    await database.execute(`DELETE FROM Instructor WHERE instructor_id = ?`, [
      instructor_id,
    ]);
    res.json({ message: "Instructor removed successfully." });
  } catch (error) {
    console.error("Error removing instructor:", error);
    res.status(500).json({ message: "Error removing instructor." });
  }
}

export async function removeCourse(req, res) {
  const { course_id } = req.body;
  try {
    const database = await connection;
    await database.execute(`DELETE FROM Courses WHERE course_id = ?`, [
      course_id,
    ]);
    res.json({ message: "Course removed successfully." });
  } catch (error) {
    console.error("Error removing course:", error);
    res.status(500).json({ message: "Error removing course." });
  }
}

export async function removeStudent(req, res) {
  const { student_id } = req.body;
  try {
    const database = await connection;
    await database.execute(`DELETE FROM Student WHERE student_id = ?`, [
      student_id,
    ]);
    res.json({ message: "Student removed successfully." });
  } catch (error) {
    console.error("Error removing student:", error);
    res.status(500).json({ message: "Error removing student." });
  }
}

export async function removeTake(req, res) {
  const { student_id, course_id } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `DELETE FROM Takes WHERE student_id = ? AND course_id = ?`,
      [student_id, course_id]
    );
    res.json({ message: "Course registration cancelled successfully." });
  } catch (error) {
    console.error("Error cancelling course registration:", error);
    res.status(500).json({ message: "Error cancelling course registration." });
  }
}

export async function removeTeach(req, res) {
  const { instructor_id, course_id } = req.body;
  try {
    const database = await connection;
    await database.execute(
      `DELETE FROM Teaches WHERE instructor_id = ? AND course_id = ?`,
      [instructor_id, course_id]
    );
    res.json({ message: "Teaching removed successfully." });
  } catch (error) {
    console.error("Error removing teaching:", error);
    res.status(500).json({ message: "Error removing teaching." });
  }
}

/**************************************************************************************************************************/

export async function fetchCourseNamesTakenByStudent(req, res) {
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

    res.json(results);
  } catch (error) {
    console.error("Error fetching courses by student ID:", error);
    res.status(500).send("Error fetching courses by student ID");
  }
}

export async function CoursesWithPrerequisites(req, res) {
  try {
    console.log("fetching courses with prerequisites");
    // const database = await connection;

    // const [results] = await database.execute(
    //   `SELECT
    //           c1.course_id AS course_id,
    //           c1.course_name AS course_name,
    //           c2.course_id AS prerequisite_course_id,
    //           c2.course_name AS prerequisite_course_name
    //       FROM
    //           Courses c1
    //       LEFT JOIN
    //           Courses c2
    //       ON
    //           c1.prerequisite_course_id = c2.course_id`
    // );
    const database = await connection;
    const { course_id } = req.params;

    const [results] = await database.execute(
      `WITH RECURSIVE PrereqTree AS (
      SELECT
        c.course_id,
        c.course_name,
        c.prerequisite_course_id,
        p.course_name AS prerequisite_course_name
      FROM 
        Courses c
      LEFT JOIN
        Courses p
      ON
        c.prerequisite_course_id = p.course_id
      WHERE 
        c.course_id = ?
        
      UNION ALL
      
      SELECT
        c.course_id,
        c.course_name,
        c.prerequisite_course_id,
        p.course_name AS prerequisite_course_name
      FROM 
        Courses c
      INNER JOIN
        PrereqTree pt
      ON
        c.course_id = pt.prerequisite_course_id
      LEFT JOIN
        Courses p
      ON 
        c.prerequisite_course_id = p.course_id
      )
      SELECT course_id, course_name, prerequisite_course_id, prerequisite_course_name FROM PrereqTree`,
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
}

// delete
// router.post("/delete_take", CancelCourse);

// // Fetch a Student by ID
// router.get("/student/:id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { id } = req.params;
//     const [studentTable] = await database.execute(
//       "SELECT * FROM Student WHERE student_id = ?",
//       [id]
//     );
//     if (studentTable.length === 0) {
//       return res.status(404).send("Student not found");
//     }
//     res.json(studentTable[0]);
//   } catch (error) {
//     console.error("Error fetching student by ID:", error);
//     res.status(500).send("Error fetching student by ID");
//   }
// });

// // Fetch an Instructor by ID
// router.get("/instructor/:id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { id } = req.params;
//     const [instructorTable] = await database.execute(
//       "SELECT * FROM Instructor WHERE instructor_id = ?",
//       [id]
//     );
//     if (instructorTable.length === 0) {
//       return res.status(404).send("Instructor not found");
//     }
//     res.json(instructorTable[0]);
//   } catch (error) {
//     console.error("Error fetching instructor by ID:", error);
//     res.status(500).send("Error fetching instructor by ID");
//   }
// });

// // Fetch a Course by ID
// router.get("/courses/:id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { id } = req.params;
//     const [courseTable] = await database.execute(
//       "SELECT * FROM Courses WHERE course_id = ?",
//       [id]
//     );
//     if (courseTable.length === 0) {
//       return res.status(404).send("Course not found");
//     }
//     res.json(courseTable[0]);
//   } catch (error) {
//     console.error("Error fetching course by ID:", error);
//     res.status(500).send("Error fetching course by ID");
//   }
// });

// // Fetch a Teaches record by ID
// router.get("/teaches/:id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { id } = req.params;
//     const [teachesTable] = await database.execute(
//       "SELECT * FROM Teaches WHERE id = ?",
//       [id]
//     );
//     if (teachesTable.length === 0) {
//       return res.status(404).send("Teaches record not found");
//     }
//     res.json(teachesTable[0]);
//   } catch (error) {
//     console.error("Error fetching teaches record by ID:", error);
//     res.status(500).send("Error fetching teaches record by ID");
//   }
// });

// // Fetch a Department by ID
// router.get("/department/:id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { id } = req.params;
//     const [departmentTable] = await database.execute(
//       "SELECT * FROM Department WHERE department_id = ?",
//       [id]
//     );
//     if (departmentTable.length === 0) {
//       return res.status(404).send("Department not found");
//     }
//     res.json(departmentTable[0]);
//   } catch (error) {
//     console.error("Error fetching department by ID:", error);
//     res.status(500).send("Error fetching department by ID");
//   }
// });

// /// Fetching all students who have taken a specific course
// router.get("/students-by-course/:course_id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { course_id } = req.params;

//     const [results] = await database.execute(
//       `SELECT
//         Student.student_id AS student_id,
//         Student.student_username AS student_username,
//         Student.student_email AS student_email,
//         Courses.course_id AS course_id,
//         Courses.course_name AS course_name
//       FROM
//         Student
//       JOIN
//         Takes ON Student.student_id = Takes.student_id
//       JOIN
//         Courses ON Takes.course_id = Courses.course_id
//       WHERE
//         Courses.course_id = ?`,
//       [course_id]
//     );

//     if (results.length === 0) {
//       return res.status(404).send("No students found for the specified course");
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching students by course:", error);
//     res.status(500).send("Error fetching students by course");
//   }
// });

// // Fetching all courses taught by a specific instructor
// router.get("/courses-by-instructor/:instructor_id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { instructor_id } = req.params;

//     const [results] = await database.execute(
//       `SELECT
//         Courses.course_id AS course_id,
//         Courses.course_name AS course_name,
//         Instructor.instructor_id AS instructor_id,
//         Instructor.instructor_username AS instructor_username
//       FROM
//         Courses
//       JOIN
//         Teaches ON Courses.course_id = Teaches.course_id
//       JOIN
//         Instructor ON Teaches.instructor_id = Instructor.instructor_id
//       WHERE
//         Instructor.instructor_id = ?`,
//       [instructor_id]
//     );

//     if (results.length === 0) {
//       return res
//         .status(404)
//         .send("No courses found for the specified instructor");
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching courses by instructor ID:", error);
//     res.status(500).send("Error fetching courses by instructor ID");
//   }
// });

// // Fetching all courses offered by a specific department
// router.get("/courses-by-department/:department_id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { department_id } = req.params;

//     const [results] = await database.execute(
//       `SELECT
//         Courses.course_id AS course_id,
//         Courses.course_name AS course_name,
//         Department.department_id AS department_id,
//         Department.department_name AS department_name
//       FROM
//         Courses
//       JOIN
//         Department ON Courses.department_id = Department.department_id
//       WHERE
//         Department.department_id = ?`,
//       [department_id]
//     );

//     if (results.length === 0) {
//       return res
//         .status(404)
//         .send("No courses found for the specified department");
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching courses by department ID:", error);
//     res.status(500).send("Error fetching courses by department ID");
//   }
// });

// // Fetching all students in a department

// router.get("/students-by-department/:department_id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { department_id } = req.params;

//     const [results] = await database.execute(
//       `SELECT
//         Student.student_id AS student_id,
//         Student.student_username AS student_username,
//         Student.student_email AS student_email,
//         Department.department_id AS department_id,
//         Department.department_name AS department_name
//       FROM
//         Student
//       JOIN
//         Courses ON Courses.administrator_id = Student.administrator_id
//       JOIN
//         Department ON Courses.department_id = Department.department_id
//       WHERE
//         Department.department_id = ?`,
//       [department_id]
//     );

//     if (results.length === 0) {
//       return res
//         .status(404)
//         .send("No students found for the specified department");
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching students by department:", error);
//     res.status(500).send("Error fetching students by department");
//   }
// });

// // fetching all instructors in a department

// router.get("/students-by-department/:department_id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { department_id } = req.params;

//     const [results] = await database.execute(
//       `SELECT
//         Student.student_id AS student_id,
//         Student.student_username AS student_name,
//         Student.student_email AS student_email,
//         Department.department_id AS department_id,
//         Department.department_name AS department_name
//       FROM
//         Student
//       JOIN
//         Courses ON Courses.administrator_id = Student.administrator_id
//       JOIN
//         Department ON Courses.department_name = Department.department_name
//       WHERE
//         Department.department_id = ?`,
//       [department_id]
//     );

//     if (results.length === 0) {
//       return res
//         .status(404)
//         .send("No students found for the specified department");
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching students by department:", error);
//     res.status(500).send("Error fetching students by department");
//   }
// });

// //fetching the courses along with their pre requisites by course_id

// router.get("/courses-with-prerequisites/:course_id", async (req, res) => {
//   try {
//     const database = await connection;
//     const { course_id } = req.params;

//     const [results] = await database.execute(
//       `WITH RECURSIVE PrereqTree AS (
//         SELECT
//           c.course_id,
//           c.course_name,
//           c.prerequisite_course_id,
//           p.course_name AS prerequisite_course_name
//         FROM
//           Courses c
//         LEFT JOIN
//           Courses p
//         ON
//           c.prerequisite_course_id = p.course_id
//         WHERE
//           c.course_id = ?

//         UNION ALL

//         SELECT
//           c.course_id,
//           c.course_name,
//           c.prerequisite_course_id,
//           p.course_name AS prerequisite_course_name
//         FROM
//           Courses c
//         INNER JOIN
//           PrereqTree pt
//         ON
//           c.course_id = pt.prerequisite_course_id
//         LEFT JOIN
//           Courses p
//         ON
//           c.prerequisite_course_id = p.course_id
//         )
//         SELECT course_id, course_name, prerequisite_course_id, prerequisite_course_name FROM PrereqTree`,
//       [course_id]
//     );

//     if (results.length === 0) {
//       return res.status(404).send("No courses found.");
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching courses with prerequisites:", error);
//     res.status(500).send("Error fetching courses with prerequisites.");
//   }
// });
