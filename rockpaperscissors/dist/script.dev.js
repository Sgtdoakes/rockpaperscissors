"use strict";

var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
var rockBtn = document.getElementById("r");
var paperBtn = document.getElementById("p");
var scissorsBtn = document.getElementById("s");

function getComputerChoice() {
  var choices = ['r', 'p', 's'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function convertToTie(letter) {
  if (letter === letter) return "";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = "".concat(convertToWord(userChoice), " beats ").concat(convertToWord(computerChoice), ". You win!");
}

function lost(userChoice, computerChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = "".concat(convertToWord(computerChoice), " beats ").concat(convertToWord(userChoice), ". You lose!");
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = "".concat(convertToTie(userChoice, computerChoice), " It's a draw!");
}

function game(userChoice) {
  var computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lost(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockBtn.addEventListener('click', function () {
    game("r");
  });
  paperBtn.addEventListener('click', function () {
    game("p");
  });
  scissorsBtn.addEventListener('click', function () {
    game("s");
  });
}

function gameOver(userScore, compScore) {
  if (userScore === 10 || compScore === 10) ;
}

main();