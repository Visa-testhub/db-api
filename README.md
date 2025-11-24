# DB-API Project

A learning-oriented project focused on understanding the fundamentals of **databases**, **SQL**, and **API connections**. This repository documents progress through coursework (Week 5 and onward), including SQL basics, MySQL Workbench usage, and relational database design exercises.

---

## Project Overview

This repository is used to practice:

- Connecting applications to databases (DB-API concepts)  
- Writing and understanding basic SQL queries  
- Designing relational database schemas  
- Using MySQL Workbench for modeling and reverse engineering  

The project is still in its early stages, but already covers the fundamentals of SQL and relational data modeling.  
As we move forward, the plan is to build **APIs with Node.js** and connect them to **React** front-end projects.

---

## SQL Basics Covered

### **Core Commands**
- `SELECT` – retrieve data  
- `FROM` – specify tables  
- `WHERE` – filter results  
- `JOIN` – combine related data  
- Additional basics: `ORDER BY`, `GROUP BY`, `LIMIT`

### **Data Modeling Concepts**
- Creating simple relational schemas  
- Primary keys & foreign keys  
- Many-to-many relationships via mid-tables  
- Enforcing relational integrity  

---

## MySQL Workbench Practice

So far, the project includes practice with:

- Designing schemas using **EER diagrams**
- **Forward engineering** models into SQL
- **Reverse engineering** existing databases into models
- **Synchronizing** Workbench models with the database

These provide a strong foundation for later backend development.

---

## Example: Library Database

A small library system database was designed to practice SQL and schema relationships.

### **Tables**
- **Tekija** — authors  
- **Teos** — literary works  
- **Tekija_Teos** — mid-table for authors ↔ works  
- **Kirja** — physical copies  
- **Asiakas** — customers  
- **Lainaus** — loans  

### **Relationships**
- One-to-many (e.g., Teos → Kirja)  
- Many-to-many (Tekija ↔ Teos)  
- Foreign key constraints & referential integrity  

This model is used for JOIN queries and Workbench experimentation.

---

## Future Plans

The next steps in this project:

### **Backend Development**
- Build APIs using **Node.js** (Express or similar)
- Implement database connections on the server side
- Create CRUD operations linked to SQL tables

### **Frontend Development**
- Build a simple **React** application
- Fetch API data and display from the backend
- Integrate forms to create/update/delete database entries

### **Advanced DB Topics (later)**
- Transactions, triggers, and views  
- More complex schemas  
- Additional API endpoints  

---


*(Will expand as new technologies are added)*

