// Create our requirements
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')


app.use(express.json())
//Creates an array of users and passwords
const users = []

app.get('/users', (req, res) => {
    res.json(users)
})
// This function will encrypt a password and then if two users
// have the same password, it will show a different encryption
// so the user will not be able to copy and paste and have to 
// figure out and crack the code.
app.post('/users', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})
// This function will be able to find if a user has been created
// And will validate whether or not the password is correct
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send("Cannot find user")
    } try {
       if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
       } else {
        res.send('Access denied')
       }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000)