const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const { getUsersSidebar } = require('../controllers/user.controller');

const router = express.Router();

router.get('/', protectRoute, getUsersSidebar)

module.exports = router;