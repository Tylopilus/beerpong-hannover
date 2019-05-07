const jwt = require('jsonwebtoken')
const {Tournament, TournamentPlayers} = require('../Models')
const config = require('../Config/config')

//posts tournaments into db
function postTournament (req, res) {
    const token = req.headers['authorization']
    jwt.verify(token, config.authentication.jwtSecret, (err) => {
        if(err){
            res.sendStatus(403)
        }
        else {
            Promise.resolve(Tournament.create(req.body))
            .then((tournament) => res.send(tournament.toJSON()))
            .catch(err => res.status(400).send({
                error: "Could not create Tournament",
                msg: err
            }))
        }
    })
}

//returns json object of all tournaments
async function getTournaments (req, res) {
    try {
        //return only Tournament Name and ID
        const tournament = await Tournament.findAll({
            order: [
                ['id', 'DESC'],
            ]
        })
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
//retourns single tournament info by ID
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
//gets players of registered Tournament
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

//adds new Team to specified tournament
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

async function postDeleteTournaments (req, res) {
    console.log('trying to delete tournaments')
    Promise.resolve(Tournament.destroy({where: {}}))
    .then(() => res.status(200).send('successfully destroyed tournamentList'))
    .catch(err => res.status(400).send('error deleting tournaments'))
}

module.exports = Object.assign({postTournament, getTournaments, getTournamentsByID, getTournamentCurrPlayersByID, postTournamentPlayers, postDeleteTournaments})