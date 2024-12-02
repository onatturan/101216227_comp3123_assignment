const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const cors = require('cors'); // Cross-Origin Resource Sharing
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 3000; // Default to 5000 if no port is provided in .env
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
