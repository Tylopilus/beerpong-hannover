module.exports = (sequelize, DataTypes) => {
    const Tournament = sequelize.define('Tournament', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            maxTeamCount: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
 
            },
            entryFee: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
        })
    return Tournament
}