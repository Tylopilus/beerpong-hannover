module.exports = (sequelize, DataTypes) => (
    sequelize.define('Tournament', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            unique: false
        },
        PlayerName: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
)