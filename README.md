# Boo World Comment/Vote API

This API provides services for a Boo World comment/voting with options.

## Requirements

To run this project, you will need:

- Node.js v20.10.0
- MongoDB Memory Server v9.1.6
- dotenv v16.4.5
- Jest v29.7.0
- Nodemon v3.1.0
- Supertest v6.3.4

Ensure you have these dependencies installed before attempting to run the project.

## Installation

1. Clone the repository to your local directory:

   ```bash
   git clone https://github.com/arislaode/boo-world.git
   ```

2. Enter the project directory:

   ```bash
   cd boo-world
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Copy the .env_example file to a new file named .env and configure the environment variables as follows:

   ```plaintext
   NODE_ENV=development
   PORT=4000
   VERSION_API=/v1
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

### Personality Types (MBTI)

- **POST** `/mbti`: Create a new MBTI type.
- **GET** `/mbti`: Retrieve all MBTI data.
- **PUT** `/mbti/{id}`: Update an existing MBTI type.
- **DELETE** `/mbti/{id}`: Delete an MBTI type.

### Enneagram Types

- **POST** `/enneagram`: Create a new Enneagram type.
- **GET** `/enneagram`: Retrieve all Enneagram types.
- **PUT** `/enneagram/{id}`: Update an existing Enneagram type.
- **DELETE** `/enneagram/{id}`: Delete an Enneagram type.

### Zodiac Signs

- **POST** `/zodiac`: Create a new Zodiac sign.
- **GET** `/zodiac`: Retrieve all Zodiac signs.
- **PUT** `/zodiac/{id}`: Update an existing Zodiac sign.
- **DELETE** `/zodiac/{id}`: Delete a Zodiac sign.

### User Profiles

- **POST** `/profiles`: Create a new profile.
- **GET** `/profiles/{id}`: Retrieve a profile by ID.

### Comments

- **POST** `/comments`: Create a new comment.
- **GET** `/comments`: Retrieve all comments.
- **PATCH** `/comments/{id}/like`: Like a comment.

## Testing

To run the tests, you can use the following command:

```bash
npm run test
```