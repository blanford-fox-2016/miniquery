const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = 3000

app.use(cors())

app.get('/', function(req, res, next) {
    res.json({ message: 'jalan dong =D' })
})

app.listen(3000, function() {
    console.log('ya udah jalan di ' + port)
})
