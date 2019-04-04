module.exports = (sequelize, DataTypes) => {
    const Tournament = sequelize.define('Tournament', {
            name: {
                type: DataTypes.STRING,
            },
            maxPlayerCount: {
                type: DataTypes.INTEGER
            },
            date: {
                type: DataTypes.DATE,
            },
        })
    return Tournament
}