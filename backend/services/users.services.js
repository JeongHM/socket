const { users } = require('../models');

const getUserIdByName = async (userName) => {
    let user = await users.findOne({where: {'name': userName}});
    return user.dataValues.id
}

module.exports = {
    getUserIdByName
}