const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const customers = [
    {id: 1, name: "App", url: "/app", edit: false},
    {id: 2, name: "Info", url: "/info", edit: false},
    {id: 3, name: "About", url: "/about", edit: false}
]
app.get('/api/urls', (req, res) => {
    res.json({data: customers})
})

app.get('/api/urls/:id', (req, res) => {
    return res.send(customers[req.params.id-1])
})

app.put('/api/urls/:id', (req, res) => {
    customers.forEach(r => {
        if(r.id === parseInt(req.params.id)){
            //console.log(r.id, req.body.data)
            r.name = req.body.data
        }
    })
})

app.post('/api/urls/:id', (req, res) => {
    console.log(req.params.id)
    return res.send(req.params.id)
})


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
