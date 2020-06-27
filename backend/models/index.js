const Sequelize = require('sequelize');
const usersModel = require('./users.models');
const roomsModel = require('./rooms.models');

const sequelize =  new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

const users = usersModel(sequelize, Sequelize);
const rooms = roomsModel(sequelize, Sequelize);

sequelize.sync();

module.exports = {
    users,
    rooms
}