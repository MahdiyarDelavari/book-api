# Book API

## Description

The Book API is a RESTful API built with Node.js, Express, and MongoDB. It allows users to manage a collection of books, including creating, reading, updating, and deleting book records.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete books.
- **Database Integration**: Uses MongoDB for data persistence.
- **Environment Configuration**: Utilizes dotenv for environment variable management.

## Prerequisites

To run this project, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MahdiyarDelavari/book-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd book-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. The API will be available at `http://localhost:6000`.

## API Endpoints

### Base URL: `/api/v1/books`

- **GET** `/`: Retrieve all books.
- **POST** `/`: Add a new book.
- **GET** `/:id`: Retrieve a book by ID.
- **PUT** `/:id`: Update a book by ID.
- **DELETE** `/:id`: Delete a book by ID.

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: Elegant MongoDB object modeling for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.

## License

This project is licensed under the ISC License.
