const express = require('express');
const bodyParser = require('body-parser')
const randomNumber = require('./randomNumber.js')
const app = express();
const PORT = 5000;
let generateAnswer = randomNumber(1, 25);
console.log(generateAnswer)
let player1Array = [];
let player2Array = [];
let player3Array = [];
let player4Array = [];
let player1Win = '';
let player2Win = '';
let player3Win = '';
let player4Win = '';
let playerWinObject = {
  player1Win,
  player2Win,
  player3Win,
  player4Win
}


function clearPlayers(){
  player1Array = [];
  player2Array = [];
  player3Array = [];
  player4Array = [];
}
function checkPlayerNumber(){
  for(player of player1Array){
    if(Number(player) === generateAnswer){
      console.log('got it1')
      clearPlayers();
      playerWinObject.player1Win = 'Player 1 Wins!'
    }
  }
  for(player of player2Array){
    if(Number(player) === generateAnswer){
      console.log('got it2')
      clearPlayers();
      playerWinObject.player2Win = 'Player 2 Wins!'
    }
  }
  for(player of player3Array){
    if(Number(player) === generateAnswer){
      console.log('got it3')
      clearPlayers();
      playerWinObject.player3Win = 'Player 3 Wins!'
    }
  }
  for(player of player4Array){
    if(Number(player) === generateAnswer){
      console.log('got it4')
      clearPlayers();
      playerWinObject.player4Win = 'Player 4 Wins!'
    }
  }
}
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
  checkPlayerNumber();
  res.sendStatus(201);
})
app.get('/history1', (req, res) => {
  res.send(player1Array);
})
app.get('/history2', (req, res) => {
  res.send(player2Array);
})
app.get('/history3', (req, res) => {
  res.send(player3Array);
})
app.get('/history4', (req, res) => {
  res.send(player4Array);
})
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
app.get('/win1', (req, res) => {
  res.send()
})