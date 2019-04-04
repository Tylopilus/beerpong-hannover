const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../Config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
    .readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })


console.log(Object.keys(db))

Object.keys(db).forEach(function(modelName) {
    if ("classMethods" in db[modelName].options) {
        if("associate" in db[modelName].options["classMethods"])
            db[modelName].options.classMethods.associate(db);
    }
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db