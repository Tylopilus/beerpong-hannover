const excelToJson = require('convert-excel-to-json');

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
    const json = makeJSON(data)
    const maxGroups = 8
    const groups = {}
    json.Worksheet.forEach((group, i) => {
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
    const json = makeJSON(data)
    const maxGroups = 8
    const groups = {}
    json.Worksheet.forEach((group, i) => {
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

function createTeamList(data){
    const json = makeJSON(data)
    teams = []
    json.Worksheet.forEach((group, i) => {
        teams.push({
            Teamname: group.C,
            Player1: group.D + " " + group.E,
            Player2: group.F + " " + group.G
        })
    })

    return teams
}

module.exports = {createGroupsWithArrays, createGroupsWithObjects, createTeamList}