module.exports = (sequelize, DataTypes) => {
    const Tournament = sequelize.define('Tournament', {
            Name: {
                type: DataTypes.STRING,
            },
            MaxPlayerCount: {
                type: DataTypes.INTEGER
            },
            PlayerCount: {
                type: DataTypes.INTEGER,
            },
        })
    return Tournament
}