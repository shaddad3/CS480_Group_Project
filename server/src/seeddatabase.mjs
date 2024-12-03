import fs from "fs/promises";
import path from "path";
import mysql from "mysql2/promise";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  host: "localhost",
  user: "root",
  password: "CS480",
};

const sqlFilePath = path.join(__dirname, "Data.sql");

async function executeSql() {
  let connection;

  try {
    connection = await mysql.createConnection(config);

    const sql = await fs.readFile(sqlFilePath, "utf8");

    const sqlStatements = sql
      .split(";")
      .filter((statement) => statement.trim());

    console.log("Executing SQL statements...");
    for (const statement of sqlStatements) {
      await connection.query(statement);
    }
    console.log("SQL execution completed successfully.");
  } catch (error) {
    console.error("Error executing SQL:", error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

executeSql();
