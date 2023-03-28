const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World App')
})

app.listen(3000, () => { console.log('App is listening on PORT 3000') })
