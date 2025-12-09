# DB-API Course Project

A backend-focused project completed during the tietokannat ja rajapinnat course.  
The work covers relational SQL, schema design, and building a small REST-style API using Node.js and MySQL.

The aim of the course was to understand the full path from **database design → SQL queries → backend API → real HTTP operations**, and to learn how application code interacts with relational databases in practice.

---

## 📚 Course Scope

### SQL & Database Foundations
- Creating tables, relationships, and enforcing referential integrity  
- Primary keys, foreign keys, and structured relational design  
- Practicing one-to-many and many-to-many relationships  
- Writing core SQL:  
  - `SELECT`  
  - `INSERT`  
  - `UPDATE`  
  - `DELETE`  
  - `JOIN` queries  
- Using MySQL Workbench for:
  - EER diagrams  
  - Forward engineering  
  - Reverse engineering  
  - Schema synchronization  

### Example Schema Used in Exercises
A small **library system** consisting of:
- Authors  
- Works / Titles  
- Mid-table linking authors ↔ works  
- Physical copies of books  
- Customers  
- Loans  

This schema was used to practice JOINs, constraints, and real relational modeling.

---

## 🖥️ Node.js API Development (Week 7)

The final week focused on implementing a working API layer between Node.js and MySQL.

### Topics Practiced
- Setting up a database connection from Node.js  
- Structuring basic backend files  
- Writing model-level SQL wrappers  
- Implementing CRUD endpoints using Express  
- Mapping database operations to correct HTTP methods:
  - **GET** → retrieve data  
  - **POST** → create new records  
  - **PUT** → full updates  
  - **PATCH** → partial updates (conceptually, even if not implemented)  
  - **DELETE** → remove records  
- Testing routes with Postman to simulate real-world clients  
