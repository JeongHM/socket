const userService = require("../services/rooms.services")


const getRoomId = (req, res) => {
    userId = req.body.userId;
    
    roomId = userService.getRoomIdByUserId(userId);
    return res.send({'roomId': roomId})
    
}

module.exports = {
    getRoomId
}