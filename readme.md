 🌀 Task Loop

**Task Loop** is a backend-powered To-Do list application that emphasizes **security**, **authentication**, and **clean API architecture**. Built with **Node.js**, **Express**, and **MongoDB**, it allows users to securely register, log in, and manage their personal tasks through a modern RESTful API—connected to a minimal Vanilla JS frontend.

> ⚠️ This project is intended for learning/demo purposes and is not fully responsive.

---

## 📌 What Can You Do with Task Loop?

- ✅ Register and securely log in  
- 🔐 Stay authenticated using JWT tokens  
- 📝 Create, update, and delete tasks  
- 🗂️ View your personal task list  
- 🛡️ All API routes are protected and validated

---

## 🧰 Tech Stack

| Layer     | Tech                  |
|-----------|------------------------|
| Backend   | Node.js, Express       |
| Database  | MongoDB (Mongoose)     |
| Auth      | JWT, bcrypt            |
| Validation| Zod                    |
| Frontend  | HTML, CSS, DOM (Vanilla JS) |

---

## 📋 Core Features

| Feature         | Description                                         |
|-----------------|-----------------------------------------------------|
| **Sign Up**     | Register with secure password hashing               |
| **Login**       | Get authenticated with JWT                          |
| **Create Task** | Add tasks with validation                           |
| **Update Task** | Modify existing tasks                               |
| **Delete Task** | Remove a task                                       |
| **Authorization** | Protect routes to logged-in users only          |

---

## 🔐 Security & Validation

- Passwords are hashed using **bcrypt**
- Inputs are validated using **Zod**
- Authenticated sessions are handled using **JWT**
- Protected routes require a valid JWT token

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home](./screenshots/home.png)

### 🔐 Login Page
![Login](./screenshots/signin.png)

### ✅ Dashboard / Task View
![Dashboard](./screenshots/dashboard.png)

---

## 🛠️ Getting Started

### 1. Clone the Repository

1. git clone https://github.com/your-username/task-loop.git
cd task-loop
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_super_secret_key
4. Start the Development Server
bash
Copy
Edit
npm run dev
5. Open the Frontend
Open public/index.html in your browser.

#🚧 Future Ideas
### Add task completion toggle

### Add due dates, priority levels

### Make it mobile responsive

### Deploy to Render / Vercel with a proper frontend framework
