import connection from "../database_connection/database_connection.mjs";

export async function addDepartment(req, res) {
  const { name, location } = req.body;
  try {
    const database = await connection;
    await database.execute(
      "INSERT INTO Department (name, location) VALUES (?, ?)",
      [name, location]
    );
    res.status(201).send("Department added successfully");
  } catch (error) {
    console.error("Error adding department:", error);
    res.status(500).send("Error adding department");
  }
}
