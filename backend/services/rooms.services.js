const getRoomIdByUserId = (userId) => {
    let roomId;

    mappingTable = [
        {'userId': 1, 'roomId': 1},
        {'userId': 2, 'roomId': 1},
        {'userId': 3, 'roomId': 2},
        {'userId': 4, 'roomId': 2},
        {'userId': 5, 'roomId': 2},
    ]
    
    mappingTable.forEach(element => {    
        if (element.userId === userId) {
            roomId = element.roomId;
        }
    });

    return roomId
}

module.exports = {
    getRoomIdByUserId
}