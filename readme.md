# Task Loop

**Task Loop** is a backend-powered To-Do list application designed to provide secure and efficient task management for users. Built using **Node.js** and **Express.js**, it offers full authentication, task creation, editing, and deletion—all handled on the backend with a clean API architecture.

This project focuses on security, validation, and maintainability, using modern tools like **JWT**, **bcrypt**, and **Zod**.

---

## 📌 What is Task Loop?

Task Loop is a simple yet robust application where users can:

- ✅ **Register** and **log in** securely  
- 🛡️ Stay **authenticated** with JWT tokens  
- 📝 **Create**, **update**, and **delete** tasks  
- 🧾 Maintain a personal task list securely in the backend  

Everything happens through a secure REST API, and the frontend uses **Vanilla JavaScript (DOM)** for interaction.

---

## 🧰 Technologies Used

- **Node.js** – Runtime for building the backend  
- **Express.js** – Framework for creating REST APIs  
- **MongoDB & Mongoose** – NoSQL database and modeling tool  
- **JWT (jsonwebtoken)** – For token-based authentication  
- **bcrypt** – To securely hash user passwords  
- **Zod** – For validating request data  
- **Vanilla JS (DOM)** – For frontend interface  

---

## 🔐 Security and Validation

- **Passwords** are never stored in plain text; they’re hashed with `bcrypt`
- All inputs (login, signup, task creation, etc.) are **validated** with `Zod` to prevent bad or malicious data
- Authenticated routes are **protected using JWT tokens**, so only logged-in users can access their data

---

## 📋 Functionality Overview

| Feature         | Description                                         |
|-----------------|-----------------------------------------------------|
| **Sign Up**     | Register new users with secure password hashing     |
| **Login**       | Authenticate users and return a JWT token           |
| **Create Task** | Add new tasks to the user's account                 |
| **Update Task** | Modify task title or status (e.g., done/not done)   |
| **Delete Task** | Permanently remove a task from the list             |
| **Authorization** | Ensures only logged-in users access their data   |

---

## 🧑‍💻 Developer Notes

- This is a pure backend project with a minimal DOM-based frontend for basic interaction.
- The backend follows clean code principles and modular structure, making it easy to maintain or expand in the future (e.g., add deadlines, tags, priorities, etc.).

---
