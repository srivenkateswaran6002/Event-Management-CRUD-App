# Event Management CRUD App

This is a simple **Event Management System** built as a learning project. The goal of this project is to understand and demonstrate how a **Django REST Framework backend** can work together with a **Next.js frontend** to perform basic CRUD (Create, Read, Update, Delete) operations.

The main focus was on getting the full stack working correctly from backend to frontend, rather than spending a lot of time on UI polish.

---

## Project Overview

The application allows users to:

* View all events
* View details of a single event
* Add a new event
* Edit an existing event
* Delete an event

The backend provides REST APIs using Django REST Framework, and the frontend consumes these APIs using Fetch or Axios.

---

## Tech Stack Used

### Backend

* Python
* Django
* Django REST Framework (DRF)
* PostgreSQL
* django-cors-headers

### Frontend

* Next.js (React)
* JavaScript
* Tailwind CSS
* Fetch API / Axios

---

## Folder Structure

```
Event-Management-CRUD-App
│
├── backend/          # Django backend
│   ├── backend/     # Project settings
│   ├── events/      # Events app (models, views, serializers)
│   ├── requirements.txt
│   └── manage.py
│
├── frontend/         # Next.js frontend
│   ├── app/ / pages/
│   ├── components/
│   ├── styles/
│   └── package.json
│
└── README.md
```

---

## Requirements

The following should be installed and available in PATH:

* Python >=3.12
* Node.js and npm
* PostgreSQL

---

## Backend Setup

```bash
cd backend
```

1. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate      # macOS / Linux
venv\Scripts\activate         # Windows
```

2. Install dependencies

```bash
pip install -r requirements.txt
```
---

## PostgreSQL Database Setup

Follow these steps to create and configure the PostgreSQL database required for the backend.

### 1. Start PostgreSQL Service

Ensure PostgreSQL is installed, running, and available in your system PATH.

**Windows**

* Open **Services** or **pgAdmin** and make sure PostgreSQL is running

**macOS (Homebrew)**

```bash
brew services start postgresql
```

**Linux**

```bash
sudo service postgresql start
```

---

### 2. Login to PostgreSQL

Open a terminal or command prompt and log in to PostgreSQL:

```bash
psql -U postgres
```

Enter the PostgreSQL password when prompted.

> You may replace `postgres` with another PostgreSQL username if applicable.

---

### 3. Create Database

Create a new database for the project:

```sql
CREATE DATABASE eventdb;
```

You may use a different database name if preferred.

Verify that the database is created:

```sql
\l
```

---

### 4. Create Database User (Recommended)

Create a dedicated database user:

```sql
CREATE USER eventuser WITH PASSWORD 'eventpassword';
```

Grant required privileges:

```sql
ALTER ROLE eventuser SET client_encoding TO 'utf8';
ALTER ROLE eventuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE eventuser SET timezone TO 'UTC';

GRANT ALL PRIVILEGES ON DATABASE eventdb TO eventuser;
```

Exit the PostgreSQL shell:

```sql
\q
```

---

### 5. Update Django Database Configuration

Edit the following file:

```
backend/backend/settings.py
```

Replace the placeholder values in the `DATABASES` section with your actual PostgreSQL credentials:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '<your_database_name>',
        'USER': '<your_database_user>',
        'PASSWORD': '<your_database_password>',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

---

### 6. Verify Database Connection

Run migrations to ensure the connection works:

```bash
python manage.py makemigrations
python manage.py migrate
```

If migrations run successfully, PostgreSQL setup is complete.

### 7. Run the server

```bash
python manage.py runserver
```

---

The backend will usually run at:

```
http://localhost:8000
```

---

### Notes

* You may use the default `postgres` user instead of creating a new one
* Ensure PostgreSQL is running before starting the Django server
* For production environments, store credentials securely using environment variables


## Backend API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /api/events/     | Get all events     |
| GET    | /api/events/:id/ | Get single event   |
| POST   | /api/events/     | Create a new event |
| PUT    | /api/events/:id/ | Update an event    |
| DELETE | /api/events/:id/ | Delete an event    |

---

## Frontend Setup

```bash
cd frontend
```

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

The frontend will run at:

```
http://localhost:3000
```

3. Production build (optional)

```bash
npm run build
npm start
```

---

## Frontend Features

* Displays all events in a list or card format
* Separate page to view event details
* Form to add new events
* Form to edit existing events
* Ability to delete events
* Basic loading and error handling
* Responsive UI using Tailwind CSS

---

## Notes

* CORS is enabled in the backend to allow requests from the frontend
* UUID is used as the primary key for events
* This project was tested and run locally

---
