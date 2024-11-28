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

export default router;
