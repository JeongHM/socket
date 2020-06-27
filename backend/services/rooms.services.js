const { rooms } = require('../models');

const getRoomIdByUserId = async (userId) => {
    let room = await rooms.findOne({where: {'userId': userId}});

    return room.dataValues.roomId
}

module.exports = {
    getRoomIdByUserId
}