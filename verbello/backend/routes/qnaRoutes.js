const express = require('express');
const qnaController = require('../controllers/qnaController');
const isAuthenticated = require('../middleware/authenticateUser')

const qnarouter = express.Router();

// Login user
qnarouter.post('/check',isAuthenticated, qnaController.check);

module.exports = qnarouter;