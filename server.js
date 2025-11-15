const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;

app.use(express.json());

const db = new sqlite3.Database('./database/university.db');

// select - select specific

app.get('/api/courses', (req, res) => {
    db.all('SELECT * FROM courses', (err, rows) => {
        res.json(rows);
    });
});

app.get('/api/courses/:courseCode', (req, res) => {
    const courseCode = req.params.courseCode;
    db.get(
        'SELECT * FROM courses WHERE courseCode = ?', [courseCode], (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message});
            } if (!row) {
                return res.status(404).json({ message: 'Course not found.' });
            }
            res.json(row);
        });
});

// insert new

app.post('/api/courses', (req, res) => {
    const { courseCode, title, credits, description, semester } = req.body;
    db.run(`
        INSERT INTO courses (courseCode, title, credits, description, semester)
        VALUES (?, ?, ?, ?, ?)
        `, [courseCode, title, credits, description, semester],
    function(err) {
        res.json({id: this.lastID});
    });
});

// update

app.put('/api/courses/:courseCode', (req, res) => {
    const id = req.params.id;
    const { courseCode, title, credits, description, semester } = req.body;
    db.run(` UPDATE courses SET title = ?, credits = ?, description = ?, semester = ? WHERE courseCode = ?`, [courseCode, title, credits, description, semester],
        function(err) {
            res.json({ message: 'Course updated'});
        });
});

// delete

app.delete('/api/courses/:courseCode', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM courses WHERE courseCode = ?', [courseCode],
        function(err) {
            res.json({ message: 'Product delete' });
        });
});

app.listen(port);