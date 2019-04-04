module.exports = (sequelize, DataTypes) => {
    const TournamentPlayers = sequelize.define('TournamentPlayers', {
            teamName: {
                type: DataTypes.STRING,
            },
            hasPaidEntryFee: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        },
        {
            // tableName: 'TournamentPlayers',
            // underscored: false,
            timestamps: true,
            classMethods: {
                associate : function(models) {
                    TournamentPlayers.belongsTo(models.Tournament, {
                        foreignKey: 'tournament_id',
                        as: 'TournamentID'
                    })
                },
            },
        })

    return TournamentPlayers
}