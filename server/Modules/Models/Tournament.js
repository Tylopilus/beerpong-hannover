module.exports = (sequelize, DataTypes) => {
    const Tournament = sequelize.define('Tournament', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Name is required!"
                    }
                }
            },
            maxTeamCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Max Teams is required!"
                    }
                }
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Date is required!"
                    }
                }
            },
            entryFee: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Entry fee is required!"
                    }
                }
            },
        })
    return Tournament
}