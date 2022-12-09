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
let playerOutcomeObject = {
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
      
      playerOutcomeObject.player1Win = 'win'
    } else if(Number(player) > generateAnswer){
      playerOutcomeObject.player1Win = 'higher'
    } else if(Number(player) < generateAnswer){
      playerOutcomeObject.player1Win = 'lower'
    }
  }
  for(player of player2Array){
    if(Number(player) === generateAnswer){
      console.log('got it2')
      
      playerOutcomeObject.player2Win = 'win'
    } else if(Number(player) > generateAnswer){
      playerOutcomeObject.player2Win = 'higher'

    } else if(Number(player) < generateAnswer){
      playerOutcomeObject.player2Win = 'lower'
      
    }
  }
  for(player of player3Array){
    if(Number(player) === generateAnswer){
      console.log('got it3')
      
      playerOutcomeObject.player3Win = 'win'
    } else if(Number(player) > generateAnswer){
      playerOutcomeObject.player3Win = 'higher'

    } else if(Number(player) < generateAnswer){
      playerOutcomeObject.player3Win = 'lower'
      
    }
  }
  for(player of player4Array){
    if(Number(player) === generateAnswer){
      console.log('got it4')
      
      playerOutcomeObject.player4Win = 'win'
    } else if(Number(player) > generateAnswer){
      playerOutcomeObject.player4Win = 'higher'
    } else if(Number(player) < generateAnswer){
      playerOutcomeObject.player4Win = 'lower'
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
app.get('/outcome', (req, res) => {
  res.send(playerOutcomeObject)
})
app.post('/restart', (req, res) => {
  if(req.body){
    clearPlayers();
    generateAnswer = randomNumber(1, 25);
    console.log(generateAnswer);
  }
  res.sendStatus(201);
})