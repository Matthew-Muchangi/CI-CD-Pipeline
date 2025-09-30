const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initialize the app (only once!)
const app = express();

// Connect the database
let mongodb_url = 'mongodb://localhost:27017/';
let dbName = 'darkroom';
mongoose.connect(`${mongodb_url}${dbName}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err) console.log(err);
});

// Test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
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
