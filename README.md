# Laptop Recommendation System

A full-stack **Laptop Recommendation System** built using the **MERN stack** that helps users find suitable laptops based on their requirements, preferences, and budget.

The system collects user requirements such as budget, processor preference, RAM, storage, graphics, and intended usage, then provides suitable laptop recommendations.

## Project Overview

Choosing a laptop can be difficult because of the large number of available models and specifications.

This project aims to simplify the laptop selection process by allowing users to enter their requirements and receive laptop recommendations based on their preferences.

The application combines a **React frontend**, **Node.js and Express backend**, and **MongoDB database** to provide a complete full-stack solution.

## Features

### User Features

* User registration and login
* Search for laptops
* View laptop specifications
* Filter laptops based on requirements
* Set preferred budget
* Select RAM and storage requirements
* Select processor preferences
* Select graphics requirements
* Choose laptop usage type
* Receive recommended laptops
* Compare suitable laptop options
* View detailed laptop information

### Recommendation System

The recommendation system considers factors such as:

* Budget
* Processor
* RAM
* Storage
* Graphics card
* Display
* Operating system
* Intended usage

Based on the selected requirements, the system identifies laptops that best match the user's needs.

### Admin Features

If an admin module is implemented:

* Admin authentication
* Add new laptops
* Update laptop information
* Delete laptop records
* Manage laptop specifications
* View available laptop data

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap / React Bootstrap

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Development Tools

* Visual Studio Code
* Postman
* Git
* GitHub
* MongoDB Atlas / MongoDB Compass

## System Architecture

```text
                         User
                          │
                          ▼
                 ┌─────────────────┐
                 │   React.js      │
                 │    Frontend     │
                 └────────┬────────┘
                          │
                          │ REST API
                          ▼
                 ┌─────────────────┐
                 │   Express.js    │
                 │   + Node.js     │
                 └────────┬────────┘
                          │
                          │ Mongoose
                          ▼
                 ┌─────────────────┐
                 │    MongoDB      │
                 │    Database     │
                 └─────────────────┘

                          │
                          ▼
                 Recommendation Logic
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
          Budget        Specs       Usage
             │            │            │
             └────────────┼────────────┘
                          ▼
                   Recommended
                      Laptops
```

## Recommendation Flow

```text
User
 │
 ▼
Enter Requirements
 │
 ├── Budget
 ├── Processor
 ├── RAM
 ├── Storage
 ├── GPU
 └── Usage
 │
 ▼
Backend receives requirements
 │
 ▼
Laptop data retrieved from MongoDB
 │
 ▼
Requirements compared with specifications
 │
 ▼
Matching laptops identified
 │
 ▼
Laptops ranked/recommended
 │
 ▼
Results displayed in React
```

## Project Structure

```text
Laptop-Recommendation-System/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── README.md
└── .gitignore
```

> Update the structure according to your actual project files.

## Example Recommendation Criteria

| Requirement | Example                        |
| ----------- | ------------------------------ |
| Budget      | ₹50,000 – ₹70,000              |
| Processor   | Intel Core i5 / AMD Ryzen 5    |
| RAM         | 16 GB                          |
| Storage     | 512 GB SSD                     |
| Graphics    | Dedicated GPU                  |
| Usage       | Programming / Gaming / Editing |

The recommendation results can be ranked according to how closely each laptop matches the user's selected requirements.

## API Endpoints

The following are example endpoints. Update them according to your actual backend implementation.

### Authentication

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| POST   | `/api/auth/register` | Register a user |
| POST   | `/api/auth/login`    | Login user      |

### Laptops

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/api/laptops`     | Get all laptops    |
| GET    | `/api/laptops/:id` | Get laptop details |
| POST   | `/api/laptops`     | Add a laptop       |
| PUT    | `/api/laptops/:id` | Update laptop      |
| DELETE | `/api/laptops/:id` | Delete laptop      |

### Recommendations

| Method | Endpoint               | Description                     |
| ------ | ---------------------- | ------------------------------- |
| POST   | `/api/recommendations` | Generate laptop recommendations |

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/laptop-recommendation-system.git
```

```bash
cd laptop-recommendation-system
```

### 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

## Environment Variables

| Variable     | Description                        |
| ------------ | ---------------------------------- |
| `MONGO_URI`  | MongoDB database connection string |
| `JWT_SECRET` | Secret key for JWT authentication  |
| `PORT`       | Backend server port                |

Never commit `.env` files or database credentials to GitHub.

Add the following to `.gitignore`:

```text
node_modules/
.env
```

## Testing

The backend APIs can be tested using **Postman**.

Important testing areas include:

* User registration
* User login
* Authentication
* Laptop retrieval
* Laptop creation
* Laptop update
* Laptop deletion
* Recommendation generation
* Invalid input handling
* Database operations

## Security

The application can use:

* JWT-based authentication
* Password hashing using bcryptjs
* Protected API routes
* Role-based authorization
* Environment variables for sensitive configuration
* MongoDB database validation

## Key Learning Outcomes

This project demonstrates practical experience with:

* MERN stack development
* REST API development
* MongoDB database design
* Mongoose schemas and queries
* React components and state management
* Backend and frontend integration
* Authentication and authorization
* Recommendation logic
* CRUD operations
* API testing using Postman

## Future Enhancements

Possible improvements include:

* AI/ML-based laptop recommendation
* Personalized recommendation scoring
* Laptop comparison dashboard
* Price tracking
* Price-drop notifications
* Product review and rating system
* User recommendation history
* Advanced filtering
* Real-time price updates
* Integration with e-commerce APIs
* Cloud deployment using AWS
* Mobile application

## Project Objective

The primary objective of this project is to build a **user-friendly laptop recommendation platform** that reduces the complexity of choosing a laptop by matching user requirements with available laptop specifications.

## Author

**Karthikeyan B**

GitHub: https://github.com/karthi07-com

LinkedIn: https://www.linkedin.com/in/kaarthikeyan-b-aba450227/

## License

This project is developed for educational and academic purposes.
