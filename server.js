const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initialize the app (only once!)
const app = express();

// MongoDB connection
// ✅ Use environment variable for Render (MONGO_URL), fallback to localhost for dev
const mongodb_url = process.env.MONGO_URL || 'mongodb://localhost:27017/darkroom';

mongoose.connect(mongodb_url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).catch(err => console.error("❌ MongoDB connection error:", err));

// Test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('✅ Database connected successfully');
});
db.on('error', err => {
    console.error('❌ Database connection error:', err.message);
});

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', index);
app.use('/image', image);

// Start server only if NOT in test mode
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`🚀 Server is listening at http://localhost:${PORT}`);
    });
}

// Export app for testing
module.exports = app;
