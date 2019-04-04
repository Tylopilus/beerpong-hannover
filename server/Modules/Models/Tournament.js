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
// const Sequelize = require('sequelize')

// module.exports = (sequelize) => {
//     const Tournament = class Tournament extends Sequelize.Model{

//     }
//     Tournament.init(
//         {
//             name: Sequelize.STRING,
//             maxPlayerCount: Sequelize.INTEGER,
//             date: Sequelize.DATE
//         },
//         {
//             sequelize
//         }
//     )
//     return Tournament
// }


// module.exports = (sequelize, DataTypes) => {
//     const Tournament = sequelize.define('Tournament', {
//         name: {
//             type: DataTypes.STRING,
//         },
//         maxPlayerCount: {
//             type: DataTypes.INTEGER
//         },
//         date: {
//             type: DataTypes.DATE,
//         },
//     })
//     return Tournament
// }

// const Sequelize = require('sequelize')
// const config = require('../Config/config')

// const sequelize = new Sequelize(
//     config.db.database,
//     config.db.user,
//     config.db.password,
//     config.db.options
// )

// //Create Classes Tournament and TournamentPlayers
// const TournamentPlayers = class TournamentPlayers extends Sequelize.Model{

// }

// const Tournament = class Tournament extends Sequelize.Model{

// }

// //Init Tables

// Tournament.init(
//     {
//         name: Sequelize.STRING,
//         maxPlayerCount: Sequelize.INTEGER,
//         date: Sequelize.DATE
//     },
//     {
//         sequelize
//     }
// )

// TournamentPlayers.init(
//     {
//         teamName: Sequelize.STRING,
//         tournament: Sequelize.INTEGER
//     },
//     {
//         sequelize
//     }
// )

// // Associate with Tournament
// TournamentPlayers.belongsTo(Tournament)

// module.exports.Tournament = Tournament
// module.exports.TournamentPlayers = TournamentPlayers