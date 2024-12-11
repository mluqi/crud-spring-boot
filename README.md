# crud-movie-collection

Berikut adalah contoh file `README.md` yang mencakup langkah-langkah untuk **meng-clone** repository, **menginisialisasi backend** dan **frontend**, serta **menjalankan** keduanya:

```markdown
# Movie Collection CRUD Application

This project contains both the backend (Spring Boot) and frontend (Vue.js) for a Movie Collection CRUD application.

## Table of Contents
1. [Prerquisites](#prerequisites)
2. [Clone the Repository](#clone-the-repository)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)

---

## Prerequisites

Make sure you have the following installed on your machine:

- **Java** (JDK 11 or later) for the Spring Boot backend
- **Node.js** (version 16 or later) and **npm** for the Vue.js frontend
- **Git** to clone the repository

---

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/mluqi/crud-spring-boot.git
cd crud-spring-boot
```

---

## Backend Setup (Spring Boot)

### 1. Install Dependencies

Navigate to the `backend` directory and make sure all dependencies are installed:

```bash
cd movies
```

If you're using Maven, dependencies should be handled automatically when running the application.

### 2. Build the Application

Use the following command to build the backend Spring Boot application:

```bash
./mvnw clean install
```

### 3. Running the Backend

To start the Spring Boot application, use the following command:

```bash
./mvnw spring-boot:run
```

The backend will now be running on `http://localhost:8080`. You can interact with the API by sending HTTP requests to this URL.

---

## Frontend Setup (Vue.js)

### 1. Install Dependencies

Navigate to the `frontend` directory and install the required dependencies using npm:

```bash
cd ../frontend
npm install
```

### 2. Running the Frontend

To start the Vue.js application, use the following command:

```bash
npm run serve
```

The frontend will now be running on `http://localhost:5173`. You can access the movie collection interface in your browser.

---

## Running the Application

To run the full application, you'll need to have both the backend and frontend running.

- **Backend**: Running on `http://localhost:8080`
- **Frontend**: Running on `http://localhost:5173`

Make sure to start both services as described in the previous sections.

---

## API Endpoints

Here are the available API endpoints for the backend:

### 1. **Get All Movies**
- **URL**: `/movies`
- **Method**: `GET`
- **Description**: Retrieves a list of all movies.

### 2. **Create a Movie**
- **URL**: `/movies`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "summary": "When the menace known as The Joker emerges from his mysterious past...",
    "genres": ["Action", "Sci-Fi"]
  }
  ```
- **Description**: Creates a new movie record in the database.

### 3. **Update a Movie**
- **URL**: `/movies/{id}`
- **Method**: `PUT`
- **Request Body**: Same as the "Create a Movie" endpoint, but with the existing movie's ID.
- **Description**: Updates an existing movie by its ID.

### 4. **Delete a Movie**
- **URL**: `/movies/{id}`
- **Method**: `DELETE`
- **Description**: Deletes a movie record by its ID.
