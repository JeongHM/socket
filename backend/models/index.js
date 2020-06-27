const Sequelize = require('sequelize');
const usersModel = require('./users.models');
const roomsModel = require('./rooms.models');

const sequelize =  new Sequelize(
    process.env.DB_DATABASE || 'socket',
    process.env.DB_USER || 'openapi',
    process.env.DB_PASSWORD || 'ftMtavBd1D5g8Y|Mt}g*A[#^KYw$E&9u',
    {
        host: process.env.DB_HOST || 'ls-ae7d2e7e8492f4296553764b03d1952683c419a0.clp2wgnz2mnw.ap-northeast-2.rds.amazonaws.com',
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