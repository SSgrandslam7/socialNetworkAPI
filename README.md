# Social Network API

## Description
A backend API for a social networking application where users can create thoughts, react to other users’ thoughts, and add or remove friends. Built using Express.js, MongoDB, and Mongoose, this application enables interaction through a set of RESTful API routes and is tested via Insomnia.

**Walkthrough Video:** [https://drive.google.com/file/d/1fbtxrQ_O8BixF1_stRJvOKDbJjLm7z6x/view]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Routes](#routes)
- [Credits](#credits)
- [License](#license)

## Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SSgrandslam7/social-network-api.git
   cd social-network-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB:**  
   Make sure MongoDB is installed and running on your local machine:
   ```bash
   brew services start mongodb-community
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

Use Insomnia to test and interact with the following API endpoints:

- Create and manage users
- Create and manage thoughts
- Add and remove reactions to thoughts
- Add and remove friends

> No front-end UI is provided. This project is meant to be explored through API testing tools.

## Features

- RESTful API using Express.js and Mongoose
- MongoDB for scalable NoSQL data storage
- Virtuals and getters for computed fields like `friendCount` and `reactionCount`
- Properly formatted timestamps on thoughts and reactions
- Deletes user’s thoughts when the user is deleted (bonus feature)
- Fully tested in Insomnia

## Routes

### Users
- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `POST /api/users/:userId/friends/:friendId`
- `DELETE /api/users/:userId/friends/:friendId`

### Thoughts
- `GET /api/thoughts`
- `GET /api/thoughts/:id`
- `POST /api/thoughts`
- `PUT /api/thoughts/:id`
- `DELETE /api/thoughts/:id`
- `POST /api/thoughts/:thoughtId/reactions`
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

## Credits

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/) for API testing

**License:**
MIT © 2025 Stephen Schier