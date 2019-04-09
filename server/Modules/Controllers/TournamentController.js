const {Tournament, TournamentPlayers} = require('../Models')


async function postTournament (req, res) {
    try {
        const tournament = await Tournament.create(req.body)
        res.send(
            tournament.toJSON(),
        )
    } catch (err){
        res.status(400).send({
            error: 'Could not create Tournament',
            msg: err
        })
    }
}
async function getTournaments (req, res) {
    try {
        //return only Tournament Name and ID
        const tournament = await Tournament.findAll()
        //const tournament = await Tournament.query("SELECT * FROM `")
        res.send({
            tournaments: tournament
        })
    }
    catch {
        res.status(500).send({
            error: 'Could not fetch all Tournaments from DB'
        })
    }
}
//implement getTournamentsbyID
async function getTournamentsByID(req, res){
    try {
        const tournament = await Tournament.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!tournament)
            return res.status(500).send({
                error: 'Could not find tournament'
            })
        res.send(tournament)
    }
    catch{
        res.send({
            error: 'Oops something went wrong with fetich tournaments'
        })
    }
}

//TODO: DEFINATELY NEEDS A NAMECHANGE OMG
async function getTournamentCurrPlayersByID(req, res){
    

    // res.send({
    //     msg: queryString
    // })
    try {
        const tournament = await TournamentPlayers.count({
            where: {
                tournament_id: req.params.id
            }
        })
        if(!tournament)
            return res.status(500).send({
                error: 'Could not find tournament'
            })
        res.status(200).send({
            "count": tournament})
    }
    catch (err){
        res.send({
            error: 'Oops something went wrong with fetch tournaments',
            msg: err
        })
    }

}

async function postTournamentPlayers (req, res) {
    try {
        const tournament = await TournamentPlayers.create(req.body)
        res.send(
            tournament.toJSON(),
        )
    } catch (err){
        res.status(400).send({
            error: err
        })
    }
}

module.exports = Object.assign({postTournament, getTournaments, getTournamentsByID, getTournamentCurrPlayersByID, postTournamentPlayers})