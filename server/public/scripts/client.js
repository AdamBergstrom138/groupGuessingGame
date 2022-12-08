$(document).ready(handleReady);
let round = 0;
function handleReady() {
  $('#submitButton').on('click', submitGuesses);
  $('#submitButton').on('click', printHistory1);
  $('#submitButton').on('click', printHistory2);
  $('#submitButton').on('click', printHistory3);
  $('#submitButton').on('click', printHistory4);
  

  console.log("jquery is loaded!")
}
function submitGuesses(){
  round++;
  $('#rounds').text(round);
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


