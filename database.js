// database.js
require('dotenv').config();
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Example function for fetching an administrator
const getAdministrator = async (UIN) => {
    const [rows] = await pool.query("SELECT * FROM `administrator` WHERE `UIN` = ?", [UIN]);
    return rows[0];
};

const addAdministrator = async (UIN, name, email, password, userId) => {
    const sql = `
        INSERT INTO administrator (UIN, name, email, password, user_id)
        VALUES (?, ?, ?, ?, ?)
    `;
    await pool.query(sql, [UIN, name, email, password, userId]);
    return true;
};

const deleteAdministrator = async (UIN) => {
    const [result] = await pool.query("DELETE FROM `administrator` WHERE `UIN` = ?", [UIN]);
    return result.affectedRows > 0;
};

// Add more functions for other entities (instructors, students, courses, etc.) as needed

module.exports = {
    getAdministrator,
    addAdministrator,
    deleteAdministrator,
    // Add other exported functions here
};
