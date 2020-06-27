const userService = require("../services/rooms.services")


const getRoomId = (req, res) => {
    let userId = req.body.userId;
    
    if (!userId){
        return res.send(404)
    }
    
    userService.getRoomIdByUserId(userId).then( (roomId) => {
        return res.send({'roomId': roomId})
    });
}

module.exports = {
    getRoomId
}