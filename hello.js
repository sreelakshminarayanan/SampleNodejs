const express = require('express')
const app = express()

app.get('/nagaraj', (req, res) => res.send('<html><h2>Hello World!</h2></html>'))

app.listen(process.env.PORT  || 3000, () => console.log('Example app listening on port 3000!'))
