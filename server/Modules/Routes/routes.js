// import {registerPost, registerGet} from '../Controllers/AuthenticationControllers'
const controller = require('../Controllers/AuthenticationController.js')

module.exports = (app) => {
    app.get('/status', (req, res) => res.send({message: 'Hello World'}))

    app.post('/register', controller.registerPost)
    app.get('/register', controller.registerGet)
}