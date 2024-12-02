import jwt from "jsonwebtoken";
import connection from "../database_connection/database_connection.mjs";

const secret = "abcdefghijklmnopqrstuvwxyz";

const userTypes = [
  {
    role: "administrator",
    table: "Administrator",
    idField: "administrator_id",
    usernameField: "administrator_username",
    passwordField: "administrator_password",
    firstNameField: "administrator_first_name",
    lastNameField: "administrator_last_name",
    emailField: "administrator_email",
  },
  {
    role: "instructor",
    table: "Instructor",
    idField: "instructor_id",
    usernameField: "instructor_username",
    passwordField: "instructor_password",
    firstNameField: "instructor_first_name",
    lastNameField: "instructor_last_name",
    emailField: "instructor_email",
  },
  {
    role: "student",
    table: "Student",
    idField: "student_id",
    usernameField: "student_username",
    passwordField: "student_password",
    firstNameField: "student_first_name",
    lastNameField: "student_last_name",
    emailField: "student_email",
  },
];

async function getUser(database, username, password) {
  for (const userType of userTypes) {
    const [user] = await database.execute(
      `SELECT * FROM ${userType.table} WHERE ${userType.usernameField} = ? AND ${userType.passwordField} = ?`,
      [username, password]
    );

    if (user.length > 0) {
      return { user: user[0], userType };
    }
  }
  return null;
}

function generateToken(userType, user) {
  return jwt.sign({ role: userType.role, id: user[userType.idField] }, secret, {
    expiresIn: "1h",
  });
}

export async function Login(req, res) {
  console.log("Login route hit");
  const { username, password } = req.body;

  try {
    const database = await connection;
    const result = await getUser(database, username, password);

    if (result) {
      const { user, userType } = result;
      const token = generateToken(userType, user);

      return res
        .cookie("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Strict",
          path: "/",
        })
        .json({
          id: user[userType.idField],
          username: user[userType.usernameField],
          role: userType.role,
          first_name: user[userType.firstNameField],
          last_name: user[userType.lastNameField],
          email: user[userType.emailField],
        });
    }

    res.status(401).json({ message: "Login failed" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
}

export async function Profile(req, res) {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(401).send("No token provided");
  }

  try {
    const decoded = jwt.verify(token, secret);
    const database = await connection;

    const [profile] = await database.execute(
      `SELECT * FROM ${
        decoded.role.charAt(0).toUpperCase() + decoded.role.slice(1)
      } WHERE ${decoded.role}_id = ?`,
      [decoded.id]
    );

    if (profile.length > 0) {
      res.json({
        id: profile[0][`${decoded.role}_id`],
        username: profile[0][`${decoded.role}_username`],
        role: decoded.role,
        first_name: profile[0][`${decoded.role}_first_name`],
        last_name: profile[0][`${decoded.role}_last_name`],
        email: profile[0][`${decoded.role}_email`],
      });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).send("Error verifying token");
  }
}

export async function Logout(req, res) {
  res
    .clearCookie("auth_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
    })
    .json({ message: "Logged out" });
}
