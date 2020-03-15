const jwt = require('jsonwebtoken')
const {User} = require('../Models')
const config = require('../Config/config')

const jwtSignUser = (user) => {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = { 

    //add new user; if email adress is already registered throw error
    async registerPost (req, res) {
        try {
            const user = await User.create(req.body)
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email-adress or Player name is already registered'
            })
        }
    },

    //just to make it complete
    // nothing todo here
    registerGet (req, res) { 
        res.status(404).send({
            message: 'This awaits a post request!'
        })
    },


    // login from client
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            
            const isPasswordValid = await user.comparePassword(password)
            if(!isPasswordValid){
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        }
        catch {
            res.status(500).send({
                error: 'An error has occured trying to log in'
            })
        }
    },
}