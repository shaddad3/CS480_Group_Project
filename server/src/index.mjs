import express from "express";
import mysql from "mysql2";
import cors from "cors";

import router from "./routes/routes.mjs";
import database_connection from "./database_connection/database_connection.mjs";

const databaseConfiguration = {
  host: "localhost",
  user: "root",
  password: "CS480",
  database: "course_registration_website",
};

const corsOptions = {
  // origin: "",
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  maxAge: 600,
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));

async function startServer() {
  try {
    await database_connection;
    console.log("[server]: Connected to the Database");

    app.use(router);

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("[server]: Error connecting to the Database", error);
  }
}

startServer();
