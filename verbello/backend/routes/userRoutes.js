const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

// Login user
userRoutes.post('/signup', userController.signupUser);
userRoutes.post('/login', userController.loginUser);
userRoutes.post('/logout', userController.logoutUser);

module.exports = userRoutes;