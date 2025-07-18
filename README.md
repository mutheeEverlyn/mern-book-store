# 🚀 Week 7: Deployment and DevOps Essentials – Launching Your MERN App

## 🚀 Objective
Learn how to deploy a full MERN stack application to production, implement CI/CD pipelines, configure environment variables, and set up monitoring for your application.

---

# Deployment and DevOps for MERN Applications

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

You will:
1. Prepare your MERN application for production deployment
2. Deploy the backend to a cloud platform
3. Deploy the frontend to a static hosting service
4. Set up CI/CD pipelines with GitHub Actions
5. Implement monitoring and maintenance strategies

---

## 📂 Tasks

### Task 1: Preparing the Application for Deployment
- **Frontend (React):**
  - Run `npm run build` in `/frontend` to generate static assets for production.
  - Code splitting is enabled by default with React and Vite.
  - Use `.env.local` for environment variables (see template below).
- **Backend (Express):**
  - Error handling and logging are implemented (see code).
  - Secure HTTP headers can be added with `helmet` (see below).
  - Use `.env` for environment variables (see template below).
  - Health check endpoint is available at `/health`.
- **MongoDB:**
  - Use MongoDB Atlas for production database.
  - Ensure proper user permissions and IP whitelisting.
  - Mongoose handles connection pooling by default.

### Task 2: Deploying the Backend
- Deploy backend to Render (or Railway/Heroku).
- Set environment variables in Render dashboard.
- Set up GitHub integration for continuous deployment.
- (Optional) Configure a custom domain and HTTPS.
- Server monitoring via Render dashboard and `/health` endpoint.

### Task 3: Deploying the Frontend
- Deploy frontend to Vercel (or Netlify/GitHub Pages).
- Configure build settings (`npm run build`).
- Set environment variables in Vercel dashboard.
- Set up GitHub integration for continuous deployment.
- (Optional) Configure a custom domain and HTTPS.
- Caching is handled by Vercel for static assets.

### Task 4: CI/CD Pipeline Setup
- Use GitHub Actions for CI/CD (see `.github/workflows/` for templates).
- Workflows should run tests, lint, and build both frontend and backend.
- Configure automatic deployment on successful builds.
- (Optional) Set up staging and production environments.
- (Optional) Implement rollback strategies.

### Task 5: Monitoring and Maintenance
- Health check endpoint: `/health` (returns server and DB status).
- Uptime monitoring: Use services like UptimeRobot or Render's built-in monitoring.
- Error tracking: Integrate with Sentry or similar (not yet implemented).
- Performance monitoring: Use Render/Vercel dashboards, or add tools like New Relic (not yet implemented).
- Maintenance: Schedule regular updates, plan for DB backups, and document deployment/rollback procedures.

---

## 🌐 Deployed Application URLs
- **Frontend:** [mern-book-store](https://mern-book-store-taupe.vercel.app/)
- **Backend API:** [mern-book-store](https://https://mern-book-store-bhny.onrender.com)
- **Health Check:** [https://mern-book-store-bhny.onrender.com/health](https://mern-book-store-bhny.onrender.com/health)

---

## 📦 Environment Variable Templates

### `/frontend/.env.local.example`
```
VITE_API_BASE_URL=https://mern-book-store-bhny.onrender.com
```

### `/backend/.env.example`
```
DB_URL=your_mongodb_atlas_connection_string
JWT_SECRET_KEY=your_jwt_secret
```

---

## 🏗️ Production Build & Optimization
- Run `npm run build` in `/frontend` to generate optimized static assets.
- Code splitting is enabled by default with Vite/React.
- Use environment variables for API URLs and secrets.

---

## 🔒 Security & Error Handling
- Backend uses CORS and environment variables for security.
- Add secure HTTP headers by installing and using `helmet`:
  ```sh
  npm install helmet
  ```
  In `backend/index.js`:
  ```js
  const helmet = require('helmet');
  app.use(helmet());
  ```
- Error handling and logging are implemented in backend routes.

---

## 🚀 Deployment Steps

### Backend (Render)
1. Create a new Web Service on Render.
2. Connect your GitHub repo and select the backend folder.
3. Set environment variables (`DB_URL`, `JWT_SECRET_KEY`).
4. Deploy and monitor logs for errors.

### Frontend (Vercel)
1. Import your repo into Vercel.
2. Set build command to `npm run build` and output directory to `dist`.
3. Set environment variable `VITE_API_BASE_URL`.
4. Deploy and test the live site.

---

## ⚙️ CI/CD Pipeline
- Add GitHub Actions workflows in `.github/workflows/` for frontend and backend.
- Example workflow for frontend:
  ```yaml
  name: Frontend CI
  on: [push]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Install deps
          run: npm install
        - name: Build
          run: npm run build
        - name: Lint
          run: npm run lint
  ```
- Example workflow for backend:
  ```yaml
  name: Backend CI
  on: [push]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Install deps
          run: npm install
        - name: Test
          run: npm test
  ```

---

## 📊 Monitoring & Maintenance
- Health check endpoint: `/health`

---

## 📸 Screenshots
- Add screenshots of your CI/CD pipeline in action here.

---

## 📄 Documentation
- Add documentation of your monitoring setup and deployment process here.

### 🚀 Deployment Documentation

#### Backend Deployment (Render)
1. Go to [Render.com](https://render.com/) and sign in or create an account.
2. Click "New Web Service".
3. Connect your GitHub repository and select the backend folder.
4. Set the build command to `npm install` and the start command to `npm start`.
5. Set environment variables (`DB_URL`, `JWT_SECRET_KEY`) in the Render dashboard.
6. Click "Create Web Service" and wait for deployment to complete.
7. Copy the deployed backend URL for use in your frontend and for API requests.
8. Monitor logs and health at `/health` endpoint.

#### Frontend Deployment (Vercel)
1. Go to [Vercel.com](https://vercel.com/) and sign in or create an account.
2. Click "New Project" and import your GitHub repository.
3. Select the frontend folder for deployment.
4. Set the build command to `npm run build` and the output directory to `dist`.
5. Set the environment variable `VITE_API_BASE_URL` to your backend’s deployed URL.
6. Click "Deploy" and wait for deployment to complete.
7. Copy the deployed frontend URL for sharing and use.
8. You can set up a custom domain and HTTPS in the Vercel dashboard if desired.

---
# mern-book-store-app
![full-stack-book-store-mern-project](/frontend/src/assets/github-cover.png)
