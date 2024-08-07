const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Define CORS options
const corsOptions = {
  origin: 'https://mall-mystery-heroes.vercel.app', // Your production domain
};

// Use CORS middleware
app.use(cors(corsOptions));

// Your existing function imports
const { targetFunction } = require('./callableFunctions/targetFunction');

// Apply your function to the Express app
app.use('/targetFunction', targetFunction);

// Export the Express app wrapped in a Firebase Function
exports.targetFunction = functions.https.onRequest(app);
