$(document).ready(handleReady);
let round = 0;
function handleReady() {
  $('#submitButton').on('click', submitGuesses);
  $('#submitButton').on('click', printHistory1);
  $('#submitButton').on('click', printHistory2);
  $('#submitButton').on('click', printHistory3);
  $('#submitButton').on('click', printHistory4);
  $('#restartButton').on('click', restartRound);
  

  console.log("jquery is loaded!")
}
function restartRound(){
  round++;
  $('#rounds').text(round);
  let restart = 'true';
  $.ajax({
    method:'POST',
    url: '/restart',
    data: restart
  }).then((res) =>{
    $('#player1History').text('')
    $('#player2History').text('')
    $('#player3History').text('')
    $('#player4History').text('')
    $('#highOrLowPlayer1').text('')
    $('#highOrLowPlayer2').text('')
    $('#highOrLowPlayer3').text('')
    $('#highOrLowPlayer4').text('')
  })
}
function submitGuesses(){
  let player1Input = $('#player1').val();
  let player2Input = $('#player2').val();
  let player3Input = $('#player3').val();
  let player4Input = $('#player4').val();
  let playerGuesses = {
    player1Input,
    player2Input,
    player3Input,
    player4Input 
  }
  $('#player1').val('');
  $('#player2').val('');
  $('#player3').val('');
  $('#player4').val('');
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: playerGuesses
}).then((response) =>{
  tooHighTooLowOrWin()
})
}
function printHistory1(){
  $.ajax({
    method: 'GET',
    url: '/history1'
}).then((response) =>{
    console.log(response)
    $('#player1History').text(response)
})
}
function printHistory2(){
  $.ajax({
    method: 'GET',
    url: '/history2'
}).then((response) =>{
    console.log(response)
    $('#player2History').text(response)
})
}
function printHistory3(){
  $.ajax({
    method: 'GET',
    url: '/history3'
}).then((response) =>{
    console.log(response)
    $('#player3History').text(response)

})
}
function printHistory4(){
  $.ajax({
    method: 'GET',
    url: '/history4'
}).then((response) =>{
    console.log(response)
    $('#player4History').text(response)
})
}
function tooHighTooLowOrWin(){
  $.ajax({
    method:'GET',
    url: '/outcome'
  }).then((playerOutcomeObject) => {
    console.log(playerOutcomeObject)
    if(playerOutcomeObject.player1Win === 'win'){
      $('playerOutcomeObject.player1Win').val('')
      $('#highOrLowPlayer1').text('You Win!')
      alert('Player 1 Wins! Press the Restart Button to play again!')

    } else if(playerOutcomeObject.player1Win === 'higher'){
      $('#highOrLowPlayer1').text('Too High')
    } else if(playerOutcomeObject.player1Win === 'lower'){
      $('#highOrLowPlayer1').text('Too Low')
    }
    if(playerOutcomeObject.player2Win === 'win'){
      $('playerOutcomeObject.player2Win').val('')
      $('#highOrLowPlayer2').text('You Win!')
      alert('Player 2 Wins! Press the Restart Button to play again!')

    } else if(playerOutcomeObject.player2Win === 'higher'){
      $('#highOrLowPlayer2').text('Too High')

    } else if(playerOutcomeObject.player2Win === 'lower'){
      $('#highOrLowPlayer2').text('Too Low')
    }
    if(playerOutcomeObject.player3Win === 'win'){
      $('playerOutcomeObject.player3Win').val('')
      $('#highOrLowPlayer3').text('You Win!')
      alert('Player 3 Wins! Press the Restart Button to play again!')


    } else if(playerOutcomeObject.player3Win === 'higher'){
      $('#highOrLowPlayer3').text('Too High')

    } else if(playerOutcomeObject.player3Win === 'lower'){
      $('#highOrLowPlayer3').text('Too Low')
      
    }
    if(playerOutcomeObject.player4Win === 'win'){
      $('playerOutcomeObject.player4Win').val('')
      $('#highOrLowPlayer4').text('You Win!')
      alert('Player 4 Wins! Press the Restart Button to play again!')

    } else if(playerOutcomeObject.player4Win === 'higher'){
      $('#highOrLowPlayer4').text('Too High')
      
    } else if(playerOutcomeObject.player4Win === 'lower'){
      $('#highOrLowPlayer4').text('Too Low')
      
    }
  })
}
