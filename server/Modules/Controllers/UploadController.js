/*
TODO: Add verification from JWT
*/

const jwt = require('jsonwebtoken')
const path = require('path')
const config = require('../Config/config')
const {Tournament, TournamentPlayers} = require('../Models')
const dataHandler = require('../../DataHandler/dataHandler.js')
const fs = require('fs')

function postUpload(req, res){
    // const token = req.headers['authorization']
    // jwt.verify(token, config.authentication.jwtSecret, (err) => {
    //     if(err)
    //         res.sendStatus(403)
    //     else {
            
    //     }
    // })
    if(req.files === null)
        return res.status(400).json({msg: 'No file uploaded'})
    
    const file = req.files.file
    file.mv(`${__dirname}../../../uploads/data.xlsx`, err => {
        if(err){
            console.error(err)
            res.status(500).send('Error at file upload. Please contact system administrator')
        }
        else{
            Promise.resolve(Tournament.create({
                name: "autoTournament",
                maxTeamCount: 48,
                date: '2019-04-07',
                entryFee: 5
            }))
            .then((tournament) => {
                Promise.resolve(getInternalTeams())
                .then(teams => {
                    teams.forEach(e => {
                         TournamentPlayers.create({
                            teamName: teams.Teamname,
                            tournament_id: tournament.id
                         })
                    })
                })
                .catch(err => console.error(err))


                res.send(tournament.toJSON())
            })
            .catch(err => res.status(400).send({
                error: "Could not create Tournament",
                msg: err
            }))
        }
    })
}

function getUpload (req, res) {
    res.sendFile(path.join(__dirname + '../../../upload.html'))
}

function getData (req, res) {
    console.log('fetching upload')
    res.sendFile(path.join(__dirname + '../../../uploads/data.xlsx'))
}

async function getGroups (req, res) {
    let file = null
    //check if the data.xlsx exists
    console.log(__dirname)
    try{
        await fs.promises.access(path.join(__dirname + "../../../uploads/data.xlsx"))
        file = path.join(__dirname + "../../../uploads/data.xlsx")
    }
    catch (err){
        console.error(err)
        return res.status(500).send('tournament data not found!')
    }

    //should not happen
    if (file === null)
        return res.status(500).send('tournament data not found!')
    const groups = dataHandler.createGroupsWithObjects(file)

    res.send(groups)
}

async function getTeams (req, res) {
    let file = null
    try{
        await fs.promises.access(path.join(__dirname + "../../../uploads/data.xlsx"))
        file = path.join(__dirname + "../../../uploads/data.xlsx")
    }
    catch (err){
        console.error(err)
        res.status(500).send('tournament data not found!')
    }

    //TODO: Look up how the server handles the upper function

    const teams = dataHandler.createTeamList(file)

    res.send(teams)
    return teams
}

async function getInternalTeams () {
    let file = null
    try{
        await fs.promises.access(path.join(__dirname + "../../../uploads/data.xlsx"))
        file = path.join(__dirname + "../../../uploads/data.xlsx")
    }
    catch (err){
        console.error(err)
        return ('tournament data not found!')
    }

    //TODO: Look up how the server handles the upper function

    const teams = dataHandler.createTeamList(file)
    return teams
}

module.exports = Object.assign({postUpload, getUpload, getData, getGroups, getTeams})
