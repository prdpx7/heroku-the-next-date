const express = require('express')
const tweep = require('tweep')
const  app = express()
app.get('/', (req, res)=> res.send('Hello world!'))
app.get('/twitter/:username/:count?', (req, res)=>{
    // console.log(req)
    var username = req.params.username || 'jack'
    var count = parseInt(req.params.count) || 5
    // console.log(count)
    tweep(username, count)
        .then(tweets => {
            res.send(tweets)
        })
})
const port_no = process.env.PORT || 8000
console.log(port_no)
app.listen(port_no, ()=> console.log(`app running on http://127.0.0.1:${port_no}`))
