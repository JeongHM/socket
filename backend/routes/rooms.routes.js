const express = require('express');
const router = express.Router();

const roomControllers = require('../controllers/room.controllers');

router.route('/').get(roomControllers.getRoomId);

module.exports = router;