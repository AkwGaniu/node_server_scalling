const os = require('os')
const cluster = require('cluster')
const { fork } = require('child_process')

if (cluster.isMaster) {
    // GET THE NUMBER OF CPUS AVAILABLE
    const num_of_cpu = os.cpus().length
    console.log('---------------------------------------------------')
    console.log('---------------------------------------------------')
    console.log(`Server forking ${num_of_cpu} CPUS`)
    console.log('---------------------------------------------------')
    console.log('---------------------------------------------------')


    for (let i = 0; i < 6; i++) {
        cluster.fork()
    }
} else {
const express = require('express')
const dotenv = require('dotenv')

const app = express()

// BODY PARSER
app.use(express.json())

//CONFIGURE ENVIRONMENT VARIABLE HOLDER
dotenv.config()

app.get('/', (req, resp, next) => {
    // Handling some request here
    resp.json("hi")
})

app.get('/slow', (req, resp, next) =>{
    const compute = fork('bigComputation.js')

    compute.send('start')  

    compute.on('message', (result) => {
        console.log(`${result}`)
        resp.send(`Result: ${result}`)
    })
})



//LISTEN TO PORT
const PORT = process.env.PORT || 3000
const pid = process.pid

app.listen(PORT, (err) => {
    if(err) throw err
    // console.log('---------------------------------------------------')
    console.log(`Process ${pid} is listening to port ${PORT}`)
})

}


