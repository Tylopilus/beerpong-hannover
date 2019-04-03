const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const config = require('./Modules/Config/config')
const {sequelize} = require('./Modules/Models/')

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

//for old sake i will keep it. Thats how I started
// const customers = [
//     {id: 1, name: "Home", url: "/", edit: false},
//     {id: 2, name: "Turniere", url: "/turniere", edit: false},
//     {id: 3, name: "Regelwerk", url: "/regelwerk", edit: false},
//     {id: 4, name: "Verein", url: "/verein", edit: false},
//     {id: 5, name: "Kontakt", url: "/kontakt", edit: false},
// ]
// app.get('/api/urls', (req, res) =>  res.json({data: customers}))

// app.get('/api/urls/:id', (req, res) => res.send(customers[req.params.id-1]))

// app.put('/api/urls/:id', (req, res) => {
//     customers.forEach(r => {
//         if(r.id === parseInt(req.params.id)){
//             //console.log(r.id, req.body.data)
//             r.name = req.body.data
//         }
//     })
// })

//for old sake i will keep it. Thats how I started
// const customers = [
//     {id: 1, name: "Home", url: "/", edit: false},
//     {id: 2, name: "Turniere", url: "/turniere", edit: false},
//     {id: 3, name: "Regelwerk", url: "/regelwerk", edit: false},
//     {id: 4, name: "Verein", url: "/verein", edit: false},
//     {id: 5, name: "Kontakt", url: "/kontakt", edit: false},
// ]
// app.get('/api/urls', (req, res) =>  res.json({data: customers}))
// app.get('/api/urls/:id', (req, res) => res.send(customers[req.params.id-1]))
// app.put('/api/urls/:id', (req, res) => {
//     customers.forEach(r => {
//         if(r.id === parseInt(req.params.id)){
//             //console.log(r.id, req.body.data)
//             r.name = req.body.data
//         }
//     })
// })
require('./Modules/Routes/routes')(app)



app.post('/api/urls/:id', (req, res) => {
    console.log(req.params.id)
    return res.send(req.params.id)
})



sequelize.sync()
    .then(() => app.listen(config.Port, () => console.log(`Server started on port ${config.Port}`)))

