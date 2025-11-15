// import sqlite3 package
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/university.db');
console.log('connected to sqlite database')

// create table
db.run(`
    CREATE TABLE courses (
    id INTEGER,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
    )
    `);
console.log('Courses Table Created');