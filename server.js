require('dotenv').config();  // Load environment variables
const express = require('express');  // Import Express
const mongoose = require('mongoose');  // Import Mongoose (MongoDB)
const cors = require('cors');  // Import CORS for cross-origin requests
const app = express();  // Initialize Express app

// Middleware
app.use(express.json());  // Parse JSON request bodies
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB error:', err));

// Import routes
const testRoutes = require('./routes/testRoutes');  // Import routes for CRUD operations

// Use routes
app.use('/api/test', testRoutes);  // Mount test routes under '/api/test'

// Test route (API is working)
// app.get('/', (req, res) => {
//     res.send('API is working!');
// });
// app.get('/api/test', (req, res) => {
//     res.json({ message: 'API is working!' });
//   });
// Start the server
const PORT = process.env.PORT || 10000;  // Use port from environment variable or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});