const express = require('express');
const router = express.Router();

const userController = require("../controllers/users.controllers");

router.route('/').get(userController.getUserIdByName);

module.exports = router;
