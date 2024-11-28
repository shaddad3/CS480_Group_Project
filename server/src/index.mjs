import express from "express";
import mysql from "mysql2";
import cors from "cors";

// import bcrypt from "bcryptjs";
// import bodyParser from "body-parser";
// import path from "path";
// import { fileURLToPath } from "url";

import router from "./routes/router.mjs";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    // origin: "",
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
    maxAge: 600,
  })
);

const db = mysql.createConnection({
  host: "localhost:3306",
  user: "administrator",
  password: "OurProjectRockx",
  database: "course_registration_website",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

app.use(router);
