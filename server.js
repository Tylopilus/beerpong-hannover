const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: "John", lastName: "FickDichDoch"},
        {id: 2, firstName: "Mary", lastName: "Didadoe"},
        {id: 3, firstName: "Peter", lastName: "Doe"}
    ]

    res.json(customers)
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
