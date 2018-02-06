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
app.listen(3000, ()=> console.log('app running on http://localhost:3000/'))