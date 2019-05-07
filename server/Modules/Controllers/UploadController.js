/*
TODO: Add verification from JWT
*/

const jwt = require('jsonwebtoken')
const path = require('path')
const config = require('../Config/config')
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
    console.log(req.files)
    file.mv(`${__dirname}../../../uploads/data.xlsx`, err => {
        if(err){
            console.error(err)
            res.status(500).send('file upload failed. Contact System Admin')
        }
        else
            res.status(200).send({msg: 'file uploaded'})
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

module.exports = Object.assign({postUpload, getUpload, getData, getGroups})
