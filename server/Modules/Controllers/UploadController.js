/*
TODO: Add verification from JWT
*/

const jwt = require('jsonwebtoken')
const path = require('path')
const config = require('../Config/config')

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
    console.log(req.files)
    file.mv(`${__dirname}../../../../client/public/uploads/data.xlsx`, err => {
        if(err){
            console.error(err)
            return res.status(500).send(err)
        }
    })
    res.status(200).send({msg: 'file uploaded'})
}

function getUpload (req, res) {
    res.sendFile(path.join(__dirname + '../../../upload.html'))
}

module.exports = Object.assign({postUpload, getUpload})
