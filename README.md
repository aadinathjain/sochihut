# SochiHut 📸 — Instagram-like MERN Stack Application

SochiHut is a full-stack social media application inspired by Instagram. Users can register, upload posts with images (via Cloudinary), like/comment on others' posts, and explore the feed — all in real-time using the MERN stack.

## 🚀 Features

- User Authentication (JWT-based)
- Image uploads via Cloudinary
- Like & comment on posts
- View user profiles and their posts
- Follow/unfollow users
- Responsive UI built with React
- Protected routes for authenticated users

---

## 🛠️ Tech Stack

**Frontend:** React, Axios, React Router  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Others:** Cloudinary (for image storage), JWT, bcrypt, dotenv

---

## 📦 Folder Structure

```bash
SochiHut/
│
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
│
├── server/               # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── README.md
└── package.json
sochihut/
├── bin/
│   └── www
├── config/                # DB and Cloudinary configs
├── controllers/           # Route logic
├── models/                # Mongoose schemas
├── public/                # Static files (CSS, JS, images)
├── routes/                # Express routes
├── uploads/               # (optional) temp image storage
├── views/                 # EJS templates
│   ├── posts/
│   ├── users/
│   └── index.ejs
├── .env
├── app.js
└── package.json
