/*
TODO: Add verification from JWT
*/

const jwt = require('jsonwebtoken')
const path = require('path')
const config = require('../Config/config')
const excelToJson = require('convert-excel-to-json');
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
            return res.status(500).send(err)
        }
    })
    res.status(200).send({msg: 'file uploaded'})
}

function getUpload (req, res) {
    res.sendFile(path.join(__dirname + '../../../upload.html'))
}

function getData (req, res) {
    console.log('fetching upload')
    res.sendFile(path.join(__dirname + '../../../uploads/data.xlsx'))
}


function makeJSON(input){
    const result = excelToJson({
        sourceFile: input,
        header:{
            rows: 1
        }
    });
    return result
}

function createGroupsWithObjects(data){
    const maxGroups = 8
    const groups = {}
    data.Worksheet.forEach((group, i) => {
        const groupName = `Gruppe${i%maxGroups+1}`
        if(groups[groupName]){
            const size = Object.keys(groups[groupName]).length
            groups[groupName] = Object.assign({[`Team${size+1}`]: {
                TeamName: group.C,
                Player1: group.D + " " + group.E,
                Player2: group.F + " " + group.G
            }}, groups[groupName])
        }
        else
            groups[groupName] = Object.assign({[`Team1`]: {
                TeamName: group.C,
                Player1: group.D + " " + group.E,
                Player2: group.F + " " + group.G
            }}, groups[groupName])
    })
    return groups
}

function createGroupsWithArrays(data){
    const maxGroups = 8
    const groups = {}
    data.Worksheet.forEach((group, i) => {
        const groupName = `Gruppe${i%maxGroups+1}`
        if(groups[groupName])
            groups[groupName].push({
                TeamName: group.C,
                Player1: group.D + " " + group.E,
                Player2: group.F + " " + group.G
            })
        else
            groups[groupName] = [{
                Teamname: group.C,
                Player1: group.D + " " + group.E,
                Player2: group.F + " " + group.G
            }]
    })
    return groups
}

async function getGroups (req, res) {
    let file = null
    //check if the data.xlsx exists
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
    const groups = createGroupsWithObjects(makeJSON(file))
    res.send(groups)
}

module.exports = Object.assign({postUpload, getUpload, getData, getGroups})
