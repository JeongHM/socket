module.exports = function(sequelize, DataTypes) {
    return sequelize.define('rooms', {
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        roomId: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    })
}