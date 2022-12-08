const express = require('express');
const bodyParser = require('body-parser')
const randomNumber = require('./randomNumber.js')
const app = express();
const PORT = 5000;
let generateAnswer = randomNumber(0, 25);
let player1Array = [];
let player2Array = [];
let player3Array = [];
let player4Array = [];
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/guesses', (req, res) => {
  let players = req.body
  player1Array.push(players.player1Input);
  player2Array.push(players.player2Input);
  player3Array.push(players.player3Input);
  player4Array.push(players.player4Input);
  res.sendStatus(201);
})
app.get('/history', (req, res) => {
  res.send();
})
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
