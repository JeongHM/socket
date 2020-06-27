const userService = require("../services/users.services");


const getUserIdByName = (req, res) => {
    let userName = req.body.name;

    if (!userName) {
        return res.send(404)
    }

    userService.getUserIdByName(userName).then( (userId) => {
        return res.send({'userId': userId})
    });
}


module.exports = {
    getUserIdByName
}