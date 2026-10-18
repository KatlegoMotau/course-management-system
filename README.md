## Course Management System

A full-stack Course Management System built using Java, Spring Boot, React, and PostgreSQL. 
The application allows users to manage course information through a REST API and a React-based user interface.

This project was developed to gain practical experience in full-stack development, REST API design, database integration, 
frontend-backend communication, and Docker containerization.


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technlogies-used)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Database](#database)
- [Docker Configuration](#dockerconfiguration)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Key Concepts Learned](#key-concepts-learned)
- [Future Improvements](#future-improvements)

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
