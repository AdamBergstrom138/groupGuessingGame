$(document).ready(handleReady);

function handleReady() {
  $('#submitButton').on('click', submitGuesses);
  console.log("jquery is loaded!")
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
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: playerGuesses
}).then((response) =>{
    
})
}
function printHistory(){
  $.ajax({
    method: 'GET',
    url: '/history'
}).then((response) =>{
    
})
}
