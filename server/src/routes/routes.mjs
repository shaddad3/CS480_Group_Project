import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

import connection from "../database_connection/database_connection.mjs";

const router = express.Router();
router.use(bodyParser.json());
const secret = "abcdefghijklmnopqrstuvwxyz";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const database = await connection;
    const userTypes = [
      {
        table: "Administrator",
        idField: "administrator_id",
        usernameField: "administrator_username",
        passwordField: "administrator_password",
        firstNameField: "administrator_first_name",
        lastNameField: "administrator_last_name",
        emailField: "administrator_email",
        role: "administrator",
      },
      {
        table: "Instructor",
        idField: "instructor_id",
        usernameField: "instructor_username",
        passwordField: "instructor_password",
        firstNameField: "instructor_first_name",
        lastNameField: "instructor_last_name",
        emailField: "instructor_email",
        role: "instructor",
      },
      {
        table: "Student",
        idField: "student_id",
        usernameField: "student_username",
        passwordField: "student_password",
        firstNameField: "student_first_name",
        lastNameField: "student_last_name",
        emailField: "student_email",
        role: "student",
      },
    ];

    for (const userType of userTypes) {
      const [user] = await database.execute(
        `SELECT * FROM ${userType.table} WHERE ${userType.usernameField} = ? AND ${userType.passwordField} = ?`,
        [username, password]
      );

      if (user.length > 0) {
        const token = jwt.sign({ id: user[0][userType.idField] }, secret, {
          expiresIn: "1h",
        });

        return res
          .cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            path: "/",
          })
          .json({
            id: user[0][userType.idField],
            username: user[0][userType.usernameField],
            role: userType.role,
            first_name: user[0][userType.firstNameField],
            last_name: user[0][userType.lastNameField],
            email: user[0][userType.emailField],
          });
      }
    }

    res.status(401).json({ message: "Login failed" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

router.post("/fetchuser", async (req, res) => {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(401).send("No token provided");
  }

  try {
    const decoded = jwt.verify(token, secret);
    const database = await connection;

    let user = null;
    let role = null;

    const [administrator] = await database.execute(
      "SELECT * FROM Administrator WHERE administrator_id = ?",
      [decoded.id]
    );

    if (administrator.length > 0) {
      user = administrator[0];
      role = "administrator";
    } else {
      const [instructor] = await database.execute(
        "SELECT * FROM Instructor WHERE instructor_id = ?",
        [decoded.id]
      );

      if (instructor.length > 0) {
        user = instructor[0];
        role = "instructor";
      } else {
        const [student] = await database.execute(
          "SELECT * FROM Student WHERE student_id = ?",
          [decoded.id]
        );

        if (student.length > 0) {
          user = student[0];
          role = "student";
        }
      }
    }

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (role === "administrator") {
      res.json({
        id: user.administrator_id,
        username: user.administrator_username,
        role,
        first_name: user.administrator_first_name,
        last_name: user.administrator_last_name,
        email: user.administrator_email,
      });
    } else if (role === "instructor") {
      res.json({
        id: user.instructor_id,
        username: user.instructor_username,
        role,
        first_name: user.instructor_first_name,
        last_name: user.instructor_last_name,
        email: user.instructor_email,
      });
    } else if (role === "student") {
      res.json({
        id: user.student_id,
        username: user.student_username,
        role,
        first_name: user.student_first_name,
        last_name: user.student_last_name,
        email: user.student_email,
      });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).send("Error verifying token");
  }
});

router.post("/logout", (req, res) => {
  res
    .clearCookie("auth_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
    })
    .json({ message: "Logged out" });
});

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

export default router;
