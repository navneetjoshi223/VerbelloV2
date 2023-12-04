const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const routes = require('./routes/routes');


const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const port = 2000; // Change as needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Final_Project');
app.use(cors()); 

app.use(express.json());

// Configure express-session and connect-mongo for session management
app.use(session({
  secret: '1965', // Change this to a secure secret key
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/Final_Project',

  }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // Session cookie lasts for 1 day
}));

// Custom middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
  if (req.session && req.session.user) {
    // User is authenticated
    next();
  } else {
    // User is not authenticated
    res.status(401).json({ error: 'Unauthorized' });
  }
};


// Use the user router
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});