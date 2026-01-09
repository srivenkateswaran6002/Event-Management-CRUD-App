# Event Management CRUD App

An **Event Management System** built using a Django REST Framework backend and a Next.js frontend. The application supports full CRUD operations on events along with user authentication and authorization.

The project focuses on clean architecture, correct backend–frontend integration, secure API design, and handling real-world concerns such as authentication, authorization, loading states, and error handling.

---

## Project Overview

The application allows authenticated users to:

* Register and log in to the application
* View all events created by them
* View details of a single event
* Add a new event
* Edit an existing event
* Delete an event
* Search events by title

The backend exposes REST APIs using Django REST Framework, and the frontend consumes these APIs using Fetch or Axios.

All event-related operations are protected and require user authentication.

---

## Tech Stack Used

### Backend

* Python
* Django
* Django REST Framework (DRF)
* PostgreSQL
* django-cors-headers
* django.contrib.auth (default Django authentication system)

### Frontend

* Next.js (React)
* JavaScript
* Tailwind CSS
* Axios / Fetch API

---

## Folder Structure

```
Event-Management-CRUD-App
│
├── backend/          # Django backend
│   ├── backend/     # Project settings
│   ├── events/      # Events app (models, views, serializers)
│   ├── accounts/    # Authentication app (register, login)
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

* Python >= 3.12
* Node.js and npm
* PostgreSQL

---

## Backend Setup

```bash
cd backend
```

### 1. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate      # macOS / Linux
venv\Scripts\activate         # Windows
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

---

## PostgreSQL Database Setup

### 1. Start PostgreSQL Service

Ensure PostgreSQL is installed and running.

**Windows**

* Start PostgreSQL via Services or pgAdmin

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

```bash
psql -U postgres
```

---

### 3. Create Database

```sql
CREATE DATABASE eventdb;
```

Verify:

```sql
\l
```

---

### 4. Create Database User (Recommended)

```sql
CREATE USER eventuser WITH PASSWORD 'eventpassword';

ALTER ROLE eventuser SET client_encoding TO 'utf8';
ALTER ROLE eventuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE eventuser SET timezone TO 'UTC';

GRANT ALL PRIVILEGES ON DATABASE eventdb TO eventuser;
```

Exit:

```sql
\q
```

---

### 5. Update Django Database Configuration

Edit:

```
backend/backend/settings.py
```

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

### 6. Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 7. Run the server

```bash
python manage.py runserver
```

Backend runs at:

```
http://localhost:8000
```

---

## Backend API Endpoints

### Authentication Endpoints

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | /api/auth/register/ | Register a new user      |
| POST   | /api/auth/login/    | Login user and get token |

**Register Response:**

* id
* username

**Login Response:**

* id
* username
* token

---

### Event Endpoints (Protected)

All event-related endpoints require **Token Authentication**.

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /api/events/     | Get all events     |
| GET    | /api/events/:id/ | Get single event   |
| POST   | /api/events/     | Create a new event |
| PUT    | /api/events/:id/ | Update an event    |
| DELETE | /api/events/:id/ | Delete an event    |

Events are scoped per user using custom `get_queryset` logic to ensure users can only access their own events.

---

## Frontend Setup

```bash
cd frontend
```

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

### 3. Production build (optional)

```bash
npm run build
npm start
```

---

## Frontend Features

* User registration and login
* Token-based authentication handling
* Displays user-specific events in a card layout
* Separate page to view event details
* Form to add new events
* Form to edit existing events
* Ability to delete events
* Search events by title
* Loading indicators for API delays
* Basic error handling for failed requests
* Responsive UI using Tailwind CSS

---

## Notes

* CORS is enabled in the backend to allow frontend access
* UUID is used as the primary key for events
* Authentication uses Django’s built-in `User` model
* A separate `accounts` app handles registration and login
* Authorization is enforced using token authentication and user-based querysets
* All previously unprotected event endpoints are now secured.
* Known Bug : The logout button may not appear unless the page is reloaded.
