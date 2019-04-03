const Promis = require('bluebird')
const bcrypt = Promis.promisifyAll(require('bcrypt-nodejs'))

// Hashes the password to not store plain text into the db
const hashPassword = (user, options) => {
    const SALT_FACTOR = 8
    if(!user.changed('password')){
        return
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

// Defines Object 'User'. Gets used in AuthenticationController (create)
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        playerName: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },
    {
        hooks: {
            //bug?
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }
    return User
}