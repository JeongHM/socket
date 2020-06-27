const userService = require("../services/users.services");


const getUserList = (req, res) => {
    userList = userService.getUserList();
    return res.send(userList)
}


module.exports = {
    getUserList
}