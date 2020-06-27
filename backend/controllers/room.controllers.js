const getRoomId = (req, res) => {
    roomId = 1;
    return res.send({'roomId': roomId});
}

module.exports = {
    getRoomId
}