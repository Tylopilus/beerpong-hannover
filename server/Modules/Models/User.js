// Defines Object 'User'. Gets used in AuthenticationController (create)
module.exports = (sequelize, DataTypes) => (
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        playerName: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
)