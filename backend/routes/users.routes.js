const express = require('express');
const router = express.Router();

const userController = require("../controllers/users.controllers");

router.route('/').get(userController.getUserList);

module.exports = router;
