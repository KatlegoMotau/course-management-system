# Course Management System

A full-stack Course Management System built using Java, Spring Boot, React, and PostgreSQL. 
The application allows users to manage course information through a REST API and a React-based user interface.

This project was developed to gain practical experience in full-stack development, REST API design, database integration, 
frontend-backend communication, and Docker containerization.


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Database](#database)
- [Docker Configuration](#docker-configuration)
- [Tools Required](#tools-required)
- [API Endpoints](#api-endpoints)

## Project Overview

The Course Management System consists of two main parts:

## 1. Backend — Course Management API
A REST API developed using Java and Spring Boot. It handles HTTP requests, processes course-related operations, validates incoming 
data, and communicates with a PostgreSQL database through Spring Data JPA and Hibernate.

## 2. Frontend — Course Management UI
A React application that provides an interface for viewing, searching, creating, updating, and deleting courses. It communicates with 
the backend API using Axios.

Each course contains the following information:
- ID
- Course name
- Duration
- Level

The project also incorporates Docker containerization to support running the backend application and PostgreSQL database in separate containers.

## Features

## Backend
- Create new courses.
- Retrieve course information.
- Update existing courses.
- Delete courses.
- Validate incoming course data.
- Handle exceptions and return appropriate HTTP responses.
- Persist course information in PostgreSQL.
- Support containerized execution using Docker.

## Frontend
- Dashboard for viewing an overview of courses.
- View a list of available courses.
- Search for courses.
- Add new courses through a form.
- Edit existing course information.
- Delete courses.
- Validate required form fields.
- Navigate between application pages using React Router.
- Communicate with the backend through a dedicated API service layer.

## Technologies Used
| Technology | Purpose |
|---|---|
| Java 22 | Backend programming language Java 22 |
| Spring Boot 4.1.1 | Backend framework |
| Spring Web |  REST API development |
| Spring Data JPA | Database access and persistence |
| Hibernate ORM | Object-relational mapping |
| PostgreSQL | Relational database |
| pgAdmin 4 | Database administration |
| Maven | Backend dependency and build management |
| React | Frontend user interface |
| JavaScript | Frontend programming |
| Axios | HTTP requests to the backend API |
| React Router | Frontend navigation |
| Vite | Frontend development and build tooling |
| Tailwind CSS | Frontend styling |  
| Postman | API testing |
| Docker | Application containerization |
| IntelliJ IDEA | Backend development |
| WebStorm | Frontend development |

## System Architecture
The application follows a layered backend architecture, with a React frontend communicating with the Spring Boot REST API.
```text
 User
  |
  v
React Frontend
  |
  v
courseService.js
  |
  | HTTP Requests
  v
Spring Boot REST API
  |
  v
Controller
  |
  v
Service
  |
  v
Repository
  |
  v
Spring Data JPA
  |
  v
Hibernate
  |
  v
PostgreSQL
```

## Project Structure

```text
course-management-system/
│
├── backend/
│   ├── .mvn/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/codewithkat/courseapi/
│   │   │   │   ├── config/
│   │   │   │   ├── Course.java
│   │   │   │   ├── CourseController.java
│   │   │   │   ├── CourseNotFoundException.java
│   │   │   │   ├── CourseRepository.java
│   │   │   │   ├── CourseRequest.java
│   │   │   │   ├── CourseService.java
│   │   │   │   ├── CourseapiApplication.java
│   │   │   │   └── GlobalExceptionHandler.java
│   │   │   └── resources/
│   │   └── test/
│   ├── .gitignore
│   ├── Dockerfile
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── CourseForm.jsx
│   │   │   ├── CourseItem.jsx
│   │   │   └── CourseList.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── AddCourse.jsx
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── courseService.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## Database
PostgreSQL stores the course information used by the application.

Spring Data JPA provides the repository abstraction, while Hibernate maps Java entities to relational database records.

pgAdmin 4 is used to inspect and manage the database during development.

The database connection settings must be configured locally. Credentials are intentionally excluded from the public repository.

## Docker Configuration
Docker is used to containerize the Spring Boot backend and PostgreSQL database, allowing both services to run in separate containers.

Docker Compose manages the containers and creates a dedicated network that allows the backend to communicate with the database using the PostgreSQL service name, course-postgres, and its internal port, 5432.

The PostgreSQL database uses a named Docker volume, course-data, to persist database records when containers are stopped or recreated.

The backend is accessible from the host machine on port 8081, while PostgreSQL is accessible locally on port 5433 for tools such as pgAdmin 4.

The React frontend runs separately on the development machine using WebStorm, Node.js, npm, and Vite. It communicates with the Spring Boot REST API through HTTP requests.

## Tools Required

Install the following tools:
- IntelliJ IDEA — backend development
- WebStorm — frontend development
- Git — version control
- Docker Desktop with Docker Compose
- Node.js and npm — running the React frontend

## Steps to Run the Application

**1. Clone the repository**
<br>https://github.com/KatlegoMotau/course-management-system.git

**2. Navigate to the project directory**
```bash
cd course-management-system
```

**3. Configure environment variables**
Create a .env file in the project root directory and set your database password.
```bash
DB_PASSWORD=your_local_database_password
```

**4. Start the backend and database**
From the project root directory, run:   
```bash
docker compose up --build -d
```

**5. Run the React frontend**
```bash
npm install
npm run dev
```

**6. Access the application services**
- React frontend: http://localhost:5173
- Spring Boot API: http://localhost:8081/api/courses
- PostgreSQL database: localhost:5433
- Maintenance database: course_db

## API Endpoints
| HTTP method | Endpoint |
|---|---|
| POST | http://localhost:8081/api/courses |
| GET | http://localhost:8081/api/courses |
| PUT | http://localhost:8081/api/courses/{id} |
| DELETE | http://localhost:8081/api/courses/{id} |

Postman was used to test API requests, inspect responses, and verify CRUD operations. pgAdmin 4 was used to inspect the stored database records.
