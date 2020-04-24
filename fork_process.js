
const express = require('express')
const dotenv = require('dotenv')
const { fork } = require('child_process')


const app = express()

// BODY PARSER
app.use(express.json())

//CONFIGURE ENVIRONMENT VARIABLE HOLDER
dotenv.config()

app.get('/fast', (req, resp, next) => {
    let num = 0
    for (let i = 0; i < 10; i++) {
        console.log(i)
        num += i
    }

    resp.json(`The sum is: ${num}`)
})

app.get('/normal', (req, resp, next) => {
    let num = 0
    for (let i = 0; i < 1e4; i++) {
        console.log(i)
        num += i
    }
    resp.json(`The sum is: ${num}`)
})

//==============================================
// Slow endpoint
app.get('/slow', (req, resp, next) =>{
    // FORK A CHILD PROCESS TO HANDLE THE COMPUTATION
    const compute = fork('bigComputation.js')

    compute.send('start')


    compute.on('message', (result) => {
        resp.send(`Result at last: ${result}`)
    })
})



//LISTEN TO PORT
const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => { 
    if(err) throw err
    console.log(`We are listening at port ${PORT}`)
})



