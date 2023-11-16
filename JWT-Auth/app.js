const express = require('express')

const app = express()

app.use(express.json())
const authRouter = require('./router/authRoute')

app.use('/api/auth/', authRouter)
app.use('/', (req, res) => {
    res.status(200).json({
        data: 'JWTauth server'
    })
})

module.exports = app;