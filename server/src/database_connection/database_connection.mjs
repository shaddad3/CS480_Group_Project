import mysql from "mysql2/promise";

const databaseConfiguration = {
  host: "localhost",
  user: "root",
  password: "CS480",
  database: "course_registration_website",
};

const database_connection = mysql.createConnection(databaseConfiguration);

export default database_connection;
