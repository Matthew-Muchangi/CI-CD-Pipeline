const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Load config file
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database
mongoose.connect(config.mongoURI.development, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err) {
        console.log("Database connection error:", err);
    } else {
        console.log("Connected to MongoDB Atlas successfully ✅");
    }
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});
