# Blogging-sytem
# QT Test Backend
This is the backend application for the QT Practical Test for Software Developers (Interns). The backend is built using Node.js and Express, with PostgreSQL as the database. It provides a RESTful API for user authentication and blog post management.

# Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
Ensure you have the following installed on your local development environment:

Node.js (v14 or higher)
npm (v6 or higher)
PostgreSQL

# Installation
Clone the repository:
git clone https://github.com/kayigireerneste/QT_TestBackend.git

Navigate to the project directory:
cd QT_TestBackend

Install the project dependencies:
npm install

# Environment Variables
Create a .env file in the root directory and add the following environment variables:

PORT=5000
DEV_DATABASE_URL=postgres://kufdzxmx:nbmhddPPxmV-NfjB1m2s5klG7PvyRf8m@heffalump.db.elephantsql.com/kufdzxmx


JWT_SECRET=hatalikweli_QTinterns500

baseURL=http://localhost:5000/



CLOUDNAME = dv9cz01fi
APIKEY = 216623824221183
APISECRET = 7EiU36FV2u2mCaTIvFut-v2Bh0U
CLOUDINARY_URL=cloudinary://216623824221183:7EiU36FV2u2mCaTIvFut-v2Bh0U@dv9cz01fi

# Running the Application
Start the development server by running the following command:

npm run dev
The application will be available at http://localhost:5000.

# Deployment
The application is deployed on Render and can be accessed at https://qt-testbackend.onrender.com