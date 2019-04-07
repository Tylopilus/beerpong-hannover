const {Tournament} = require('../Models')

async function postTournament (req, res) {
    try {
        const tournament = await Tournament.create(req.body)
        res.send(
            tournament.toJSON(),
        )
    } catch {
        res.status(400).send({
            error: 'Could not create Tournament'
        })
    }
}
async function getTournaments (req, res) {
    try {
        //return only Tournament Name and ID
        const tournament = await Tournament.findAll()
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


module.exports = Object.assign({postTournament, getTournaments, getTournamentsByID})