// import {registerPost, registerGet} from '../Controllers/AuthenticationControllers'
const controller = require('../Controllers/AuthenticationController.js')
const policyController = require('../Policies/AuthenticationContollerPolicy.js')



module.exports = (app) => {
    app.get('/status', (req, res) => res.send({message: 'Hello World'}))

    app.post('/register', 
        policyController.register, 
        controller.registerPost)
    
        
    //returns 400: nothing to do
    app.get('/register', controller.registerGet)

    app.post('/login', controller.login)

    app.get('/tournaments', controller.getTournaments)
    app.post('/tournaments', controller.postTournament)
}