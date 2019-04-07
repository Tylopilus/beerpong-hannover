module.exports = (sequelize, DataTypes) => {
    const Tournament = sequelize.define('Tournament', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { message: "Name is required"}
                }
            },
            maxPlayerCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { message: "Max Player Count is required"}
                }
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notNull: { message: "Date is required!"}
                }
            },
        })
    return Tournament
}