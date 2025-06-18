# TL-Connect



🚀 **TL-Connect** is the internal portal for **Tinkerers' Lab, IITH**, designed to manage workshops, summer schools, internal tasks, announcements, and member coordination across domains.

This repository represents the **frontend** portion of the TL-Connect system, implemented in **Next.js**, simulating user roles and functionality using mock JSON data. This project lays the foundation for a scalable and production-ready management portal.

---

## 📌 Problem Statement

Build a **frontend-only** UI/UX structure for TL Connect to simulate:

- Core/Admin dashboard
- Member coordination
- Task and announcement tracking
- Workshop and summer school management

---

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules + Global CSS (responsive + dark mode)
- **Routing**: `next/router`
- **Mock Data**: Local dummy JSON files
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Folder Structure
tl-connect-frontend/  

├── components/ # Reusable UI components like Navbar, Footer, Cards  

├── pages/ # All route-based pages  

│ ├── login.jsx  

│ ├── dashboard.jsx  

│ ├── workshops.jsx  

│ ├── summer-school.jsx  

│ ├── tasks.jsx  

│ ├── members.jsx  

│ └── announcements.jsx  

├── data/ # Dummy JSON data files  

├── styles/ # Global and module-level CSS  

├── public/ # Static assets (images, icons)  

├── README.md  

└── package.json  


---

## 🔑 Features

### 🔐 1. Login Page
- Role selection (Core, Domain Lead, Member, Student)
- Simulated login — redirects to respective dashboard
- No authentication logic implemented yet

### 🏠 2. Dashboard
- Personalized dashboard for each role
- Summary cards for:
  - Upcoming Workshops
  - Assigned Tasks
  - Class Join Links
  - Announcements

### 🛠 3. Tasks Page
- Domain-wise task cards
- Each task shows:
  - Status (Pending / In Progress / Done)
  - Date assigned
  - Task title & description

### 📚 4. Summer School Page
- Table-based class tracker
- Includes:
  - Lecture topics
  - Google Meet links
  - Assignment materials

### 🧑‍💻 5. Workshops Page
- Lists both upcoming and past workshops
- Each workshop has:
  - Title, Domain, Date
  - Register or View Details Button
- Filters based on domain/status

### 👥 6. Members Page
- Lists all members grouped by domain
- Displays:
  - Name, Role, Domain
  - Task placeholder

### 📢 7. Announcements Page
- Notice board format
- Sorted by most recent first
- Color tags for:
  - Important
  - Info
  - Critical

---

## 🎨 UI/UX Features

- Responsive across all devices
- Dark mode and light mode support
- Clean, modern UI
- Navigation via buttons in Navbar and Footer
- Hover effects, shadows, and transitions for smooth interaction
- Accessible color schemes with high contrast readability

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/tl-connect-frontend.git
cd tl-connect-frontend
```
2. Install Dependencies
Ensure Node.js ≥ 18 is installed.
```bash
npm install
```
3. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to view the app locally.

4. Folder Structure for Dummy Data
Put your mock data (JSON files) in the data/ directory and import them into relevant pages as needed:
```js
import workshops from '../data/workshops.json';
```
🚀 Deployment
Deploy via Vercel
If your app is in a subfolder (like tl-connect-frontend):
Go to vercel.com

Connect your GitHub repository

During project setup:

Root Directory: tl-connect-frontend

Framework Preset: Next.js

Click Deploy

Once deployed, your frontend will be live at:

https://<your-vercel-project>.vercel.app
🐞 Known Issues
No actual authentication — only simulated via role dropdown

No backend integration (yet)

Responsive layout may require further tuning on smaller devices

🧩 Future Work (Part 2 Preview)
The second phase of this project will include:

REST API integration with Go backend

Real user authentication & session handling

Dynamic task creation, assignment & updates

Announcement creation (by Core team)

File uploads for assignments


📸 Screenshots
✅ Login Page
<img src="./public/screenshots/login.png" width="600" />
📋 Dashboard
<img src="./public/screenshots/dashboard.png" width="600" />
🎓 Summer School Page
<img src="./public/screenshots/summer-school.png" width="600" />


**Made with ❤️ by P.Vidya Praveen**
