// server.js
const express = require('express');
const db = require('./config/db');
const router = require('./src/routes/routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', router);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something broke!'
    });
});

// Database connection and server startup
const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database connection established successfully');
        
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to database:', error);
        process.exit(1);
    }
};

startServer();

module.exports = app;
