const {User} = require('../Models')

module.exports = { 

    //add new user; if email adress is already registered throw error
    async registerPost (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email-adress or Player name is already registered'
            })
        }
    },

    //just to make it complete
    // nothing todo here
    registerGet (req, res) { 
        res.send({
            message: 'This awaits a post request!'
        })
    }
}