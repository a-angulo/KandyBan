# 🎯 Kandyban (Kanban Board – Module 14)

-[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
-[![React](https://img.shields.io/badge/Frontend-React-blue.svg)](https://reactjs.org/)
-[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg)](https://www.postgresql.org/)
-[![JWT](https://img.shields.io/badge/Auth-JWT-orange.svg)](https://jwt.io/)
-[![Render](https://img.shields.io/badge/Deployed_on-Render-brightgreen.svg)](https://render.com)

---
### Live Demo

👉 [Click here to view the live application](https://kandyban.onrender.com)
--

## 📚 Table of Contents

1. [Description](#description)  
2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Testing](#testing)  
5. [Contributing](#contributing)  
6. [License](#license)  

---

## 📝 Description

**Kandyban** is a secure, full-stack Kanban board built with React, Node.js, Express, and PostgreSQL. This app introduces JWT-based authentication to protect access to tasks and allow session management, role-based access, and more. It supports agile development teams who need a reliable, secure, and user-friendly task management solution.

Once authenticated, users are presented with a dashboard where they can:

- View project tickets organized into three columns: **To Do**, **In Progress**, and **Completed**
- Add new tickets
- Edit existing tickets
- Delete tickets

The application is deployed to **Render** and uses **PostgreSQL** for database management.

---

## 🧠 Installation:

o install and run the application locally:

1. Clone the repository:

   ```bash
   git clone git@github.com:your-username/Kandyban.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Kandyban/develop
   ```

3. Install dependencies for both server and client:

   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

4. In the `/server` folder, create a `.env` file with the following content:

   ```env
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   JWT_SECRET=your_super_secret_key
   ```

5. Set up the database:

   - Run PostgreSQL
   - Use seed scripts if available or manually run `schema.sql` and `seeds.sql`

6. Run the application:

   ```bash
   # Terminal 1 (server)
   cd server
   npm run dev

   # Terminal 2 (client)
   cd client
   npm run dev
   ```

7. Open your browser to:

   ```
   http://localhost:5173
   ```

---

## 🚀 Usage

Once authenticated, users can:

- View their Kanban board
- Add new project tickets
- Edit existing tasks
- Delete tasks
- Move tasks between board columns


---

## 🧪 Testing

You can test the application manually by:

- Registering and logging in
- Adding, editing, and deleting tasks
- Moving tasks across columns
- Verifying session persistence and JWT expiration

API endpoints can also be tested with [Insomnia](https://insomnia.rest/) using this collection:

📥 [Download Test Collection](https://static.bc-edx.com/coding/software-dev/14-Full-Stack-React/assets/Insomnia_M14_Challenge.zip)

---

## 🤝 Contributing

Special thanks to:

- **ChatGPT** – for code reviews and README help  
- **Xpert Learning** – for bootcamp guidance  
- **Mentors & Tutors** – for helping debug and architect

### Want to contribute?

1. Fork this repository  
2. Create a new feature branch  
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to GitHub  
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 🧪 Tests

This application is functioning properly if users can:

- Log in with valid credentials
- View and manage tasks on their board
- Add/edit/delete tasks without error
- See JWT session expiration handled correctly
- Navigate protected routes only when authenticated

---

## 🪪 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
