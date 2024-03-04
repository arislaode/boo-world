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

## How to Use the API

Follow these steps to get started with our API:

1. **Add a New MBTI Type**: First, use `/mbti` with a POST request to add an MBTI type.

2. **Add a New Enneagram Type**: Then, use `/enneagram` with a POST to add an Enneagram type.

3. **Add a New Zodiac Sign**: Next, use `/zodiac` with a POST to add a Zodiac sign.

4. **Create a Profile**: Now, you can create a user profile by using `/profiles` with a POST request.

5. **Post a Comment**: Share your thoughts by posting a comment with `/comments` using POST.

6. **Like a Comment**: Show some love to a comment by using PATCH on `/comments/{id}/like`, where `{id}` is the comment's ID you want to like.

7. **Filter Comment**: Show some love to a comment by using PATCH on `/comments/filter`, Returns a list of comments filtered by the specified personality type (ALL, Zodiac, Enneagram, MBTI).

## API Docs with Swagger

You can find detailed documentation for our API at `http://localhost:4000/v1/api-docs`. This page has all the info you need to understand and use the API, including how to make requests and what responses to expect.

## LIST
The following is a list of APIs for this system : 

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
- **GET** `/comments/filter`: list comment filtered

## Testing

To run the tests, you can use the following command:

```bash
npm run test
```