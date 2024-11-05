// server.js
const express = require('express');
const db = require('./config/db');
const router = require('./src/routes/routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api',router);


db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
