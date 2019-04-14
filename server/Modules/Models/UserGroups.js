module.exports = (sequelize, DataTypes) => {
    const UserGroups = sequelize.define('UserGroups', {
            userGroup: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "userGroup is required!"
                    }
                }
            },
        })
    return UserGroups
}