const getUserList = (req, res) => {
    userList = [{'id': 1, 'name': 'min'}]
    return res.send(userList)
}


module.exports = {
    getUserList
}