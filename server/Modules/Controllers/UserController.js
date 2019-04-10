const jwt = require('jsonwebtoken')
const {User} = require('../Models')
const config = require('../Config/config')

const jwtSignUser = (user) => {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
//add new user; if email adress is already registered throw error
async function registerPost (req, res) {
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
}

//just to make it complete
// nothing todo here
function registerGet (req, res) { 
    res.status(404).send({
        message: 'This awaits a post request!'
    })
}


// login from client
async function login (req, res) {
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
            token: jwtSignUser(userJSON)
        })
    }
    catch {
        res.status(500).send({
            error: 'An error has occured trying to log in'
        })
    }
}

function getAuthedUser(req, res) {
    jwt.verify(req.token, config.authentication.jwtSecret, (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {
            Promise.resolve(
                User.findOne({
                    where: {
                        email: authData.email
                    }
                })
            )
            .then((user) => {
                if(user) res.send(authData)
                else
                    res.sendStatus(403)
            })                
            .catch(() => console.log("Promise error at getAuthedUser"))
        }
    })
}


async function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }
    else {
        res.status(403).send({message: "error forbidden"})
    }
}

module.exports = Object.assign({login, registerGet, registerPost, getAuthedUser, verifyToken})