const p1score = document.querySelector("#player1");
const p2score = document.querySelector("#player2");
const resetGame = document.querySelector("#reset");

const button1 = document.querySelector("#btnP1");
const button2 = document.querySelector("#btnP2");

let selectScore = document.querySelector("#selectScore");
let gameOver = false;
let maxScore = parseInt(selectScore.value);

let score1 = 0;
let score2 = 0;

button1.addEventListener("click", function () {
  if (!gameOver) {
    score1 += 1;
    if (score1 === maxScore) {
      gameOver = true;
      p1score.classList.add("winner");
      p2score.classList.add("loser");
    }
    p1score.textContent = `${score1}`;
  }
});

button2.addEventListener("click", function () {
  if (!gameOver) {
    score2 += 1;
    if (score2 === maxScore) {
      gameOver = true;
      p1score.classList.add("loser");
      p2score.classList.add("winner");
    }
    p2score.textContent = `${score2}`;
  }
});

selectScore.addEventListener("change", function () {
  maxScore = parseInt(selectScore.value);
  reset();
});

resetGame.addEventListener("click", reset);

function reset() {
  gameOver = false;
  score1 = 0;
  score2 = 0;
  p1score.textContent = 0;
  p2score.textContent = 0;
  p1score.classList.remove("winner", "loser");
  p2score.classList.remove("winner", "loser");
}
