const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(express.json())


app.get((req, resp, next) => {
    // Handling some request here
})

const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if(err) throw err
    console.log(`We are up at port ${port}`)
})