# React Express SQL Form

This is a simple full-stack form application built using the **MERN stack** with **PostgreSQL** as the backend database.

---

## 🚀 Features

- Beautiful frontend using **React.js**
- Backend API built with **Express.js**
- Stores form data in **PostgreSQL** database
- Captures **Name**, **Phone**, and **Email**
- Responsive, clean UI

---

## 🛠️ Tech Stack

- React.js (Frontend)
- Express.js (Backend)
- Node.js
- PostgreSQL (Database)

---


---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/neeshoo/react-express-sql-form.git
cd react-express-sql-form


# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


# Start PostgreSQL and Create Table
Make sure PostgreSQL is running.
Run this SQL to create the table:

sql
Copy
Edit
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT
);


# Run the App
bash
Copy
Edit
# Start backend
cd server
node index.js

# Start frontend
cd ../client
npm start
