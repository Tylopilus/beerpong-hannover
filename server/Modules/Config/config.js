const SecretKey = require('./AuthenticationKey')
module.exports = {
    Port: process.env.PORT || 5001,
    db: {
        database: process.env.DB_NAME || "beerponghannover_db",
        user: 'admin',
        password: 'samplePassword123@bph.de',
        options: {
            dialect: 'sqlite',
            host: process.env.host || 'localhost',
            storage: 'beerponghannover_db.sqlite'
        }
    },

    authentication: {
        jwtSecret: process.env.JWT_SECRET || SecretKey
    }
}