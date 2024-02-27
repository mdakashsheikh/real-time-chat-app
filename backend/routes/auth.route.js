const express = require('express');
const { 
    signUp, 
    logIn, 
    logOut 
} = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', signUp);
router.get('/login', logIn);
router.get('/logout', logOut);

module.exports = router;