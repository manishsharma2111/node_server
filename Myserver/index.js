import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import User from './models/user.model'

let app = express()

app.use(bodyParser.json())

app.get('/:userId', async (req, res) => {
    console.log(req.params.userId)
    let user = await User.findOne({ _id: req.params.userId })
    return res.json(user)
})

app.post('/user', (req, res) => {
    let { email, password, name } = req.body;

    User.create({
        email,
        password,
        name
    });

    return res.send('created');
})

mongoose.connect('mongodb://127.0.0.1:27017/ManishLearning', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('connection to database successful')
    app.listen(5000, () => {
        console.log('server is listening')
    })
})

mongoose.connection.on('error', () => {
    console.log('connection to database failed')
})
