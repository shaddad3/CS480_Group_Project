// app.js
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();

app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Course Registration!" });
});

// Administrator routes
app.get('/administrator/:UIN', async (req, res) => {
    try {
        const UIN = req.params.UIN;
        const administrator = await database.getAdministrator(UIN);
        if (administrator) {
            res.json(administrator);
        } else {
            res.status(404).json({ error: "Administrator not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/administrator', async (req, res) => {
    try {
        const { UIN, name, email, password, user_id } = req.body;
        const result = await database.addAdministrator(UIN, name, email, password, user_id);
        res.status(201).json({ success: result, message: "Administrator added!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/administrator/:UIN', async (req, res) => {
    try {
        const UIN = req.params.UIN;
        const result = await database.deleteAdministrator(UIN);
        if (result) {
            res.json({ message: "Administrator deleted" });
        } else {
            res.status(404).json({ error: "Administrator not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add similar routes for instructors, departments, students, and courses

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
