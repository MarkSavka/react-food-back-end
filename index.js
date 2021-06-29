const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const path = require('path')

// const jsonData = require('./api/router/json.json')
const jsonData = require('./api/router/real_json.json')

app.use( cors() );

const dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/item', (req, res) => {
   res.send(jsonData)
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
