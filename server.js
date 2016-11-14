'use strict'


const express = require('express')
const cors = require('cors')

const app = express()

// setting up middleware
app.use(cors())

app.get('/', (req, res) => {
  res.json({text : 'hello world'})
})


app.listen(3000, () => {
  console.log("server is running on port 3000");
})
