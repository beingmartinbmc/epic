# MongoDB Integration Setup

This project now includes MongoDB integration to store user conversations and model outputs.

## Environment Variables Required

Add the following environment variables to your deployment platform (Vercel, etc.):

```
# MongoDB Configuration
MONGODB_USERNAME=your_mongodb_username_here
MONGODB_PASSWORD=your_mongodb_password_here
```

## MongoDB Atlas Setup

1. Create a free MongoDB Atlas account at https://www.mongodb.com/atlas
2. Create a new cluster (free tier)
3. Create a database user with read/write permissions
4. Get your connection string and extract username/password
5. Add the credentials as environment variables

## Database Structure

The application will automatically create a `conversations` collection in the `religious-guide` database with the following structure:

```javascript
{
  _id: ObjectId,
  userInput: Array, // Messages sent by user
  modelOutput: Object, // Response from OpenAI
  timestamp: Date,
  model: String, // OpenAI model used
  temperature: Number,
  maxTokens: Number,
  usage: Object, // Token usage statistics
  requestId: String // OpenAI request ID
}
```

## API Endpoints

- `POST /api/openai-proxy` - Main endpoint that stores conversations
- `GET /api/conversations` - Retrieve stored conversations (for monitoring)

## Monitoring Conversations

You can view stored conversations by calling:
```
GET /api/conversations?limit=50
```

This will return the 50 most recent conversations stored in MongoDB.

## Error Handling

- MongoDB connection failures won't break the main API functionality
- All MongoDB errors are logged but don't affect the user experience
- The API will continue to work even if MongoDB is unavailable 