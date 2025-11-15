// import sqlite3 package
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/university.db');

// insert courses
db.run(`
    INSERT INTO courses (courseCode, title, credits, description, semester)
    VALUES
    ('CS101', 'Intro Programming', 3, 'Learn Python basics', 'Fall 2024'),
    ('BIO120', 'General Biology', 3, 'Introduction to biological principles', 'Fall 2024'),
    ('MATH150', 'Calculus 1', 4, 'Basic calculus', 'Fall 2024'),
    ('ENG101', 'Composition 1', 3, 'Academic writing and critical thinking', 'Spring 2025'),
    ('ME210', 'Thermodynamics', 3, 'Principles of thermodynamics = and heat transfer', 'Spring 2025'),
    ('CS301', 'Database Systems', 3, 'Design and implementation of database systems', 'Fall 2024'),
    ('PHYS201', 'Pjysics 2', 4, 'Electricity, magnetism, and modern physics', 'Spring 2025'),
    ('CS201', 'Data Stuctures', 4, 'Study of fundamental data structures and algorithms', 'Springs 2025')
    `);
    console.log("Course data added");