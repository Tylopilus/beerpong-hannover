// import {registerPost, registerGet} from '../Controllers/AuthenticationControllers'
const passport = require('passport')
const controller = require('../Controllers/AuthenticationController.js')
const policyController = require('../Policies/AuthenticationContollerPolicy.js')
const TournamentController = require('../Controllers/TournamentController')
const UserController = require('../Controllers/UserController')
const UploadController = require('../Controllers/UploadController')


module.exports = (app) => {

    app.post('/register', 
        policyController.register, 
        UserController.registerPost)
    app.get('/register', UserController.registerGet)
    
    app.post('/login', UserController.login)

    app.post('/userGroups', UserController.postUserGroup)
    app.get('/userGroups', UserController.getUserGroups)




    app.get('/getAuthedUser', UserController.verifyToken, UserController.getAuthedUser)

    app.post('/tournaments', TournamentController.postTournament)
    app.get('/tournaments', TournamentController.getTournaments)
    app.post('/enterTournament/:id', TournamentController.postTournamentPlayers)
    //TODO: implement this
    //app.get('/tournaments/:id', TournamentController.getTournamentsByID)
    app.get('/tournaments/:id', TournamentController.getTournamentCurrPlayersByID)
    
/*
    Upload data-excel
*/
    app.post('/upload', UploadController.postUpload)
    app.get('/upload', UploadController.getUpload)
}