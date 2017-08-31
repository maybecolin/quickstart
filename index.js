const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.JAWSDB_URL,
})
client.connect()

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  client.query('SELECT NOW()').then((data) => {
    res.send(data.rows[0]);
  })
  .catch(err => {
    res.status(500).send('Something went wrong!')
  })
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
