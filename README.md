# Assignment #6: Course Database Assignment

A simple course catalog management API built with Express.js and SQLite.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create database and tables:
   ```bash
   node database/setup.js
   ```

3. Seed database with sample data:
   ```bash
   node database/seed.js
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

## File Structure

```
server.js
database/
├── setup.js
├── seed.js
└── university.db
package.json
README.md
```