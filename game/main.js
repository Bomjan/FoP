import { mcqQuestions } from "./questions.js";

const highestScore = document.getElementById("highest-score");
const currentProgress = document.getElementById("current-progress");
const start = document.getElementById("start");
const countDown = document.getElementById("count-down");
const bomb = document.getElementById("bomb-image");
const beep = document.getElementById("bomb-sound");
const question = document.getElementById("question");
const options = document.getElementById("options");

// Because it would be so stupid to repeat everytime, and a mess.
// This images are directly from postimages, cloud gallery.
const imageUrls = {
  timeBomb: "https://i.postimg.cc/SK7SmnbW/timebomb.png",
  explodedImage: "https://i.postimg.cc/BnRrXNdk/explosion.gif",
  congratulations: "https://i.postimg.cc/g2hMBpTs/congrats.gif",
  explosion: "https://i.postimg.cc/L5v9PTkR/exploded.png",
};

// few global variables
let questionIndex = 0;
const totalQuestions = 8;
let score = 0;

// This is required for stopping countdown if the player finishes the quiz before time.
let timerID;
let timeLeft = 10;

start.addEventListener("click", () => {
  gameReset();
  // to start the wiggling of bomb image. see style.css for this animation implementation
  bomb.classList.add("started");
  beep.currentTime = 0; // because the beep is being stopped anytime, it is necessary to start from the beginning
  beep.play();
  counter(timeLeft);
  ask();
});

const gameReset = () => {
  clearTimeout(timerID);
  bomb.src = imageUrls.timeBomb;
  questionIndex = 0;
  score = 0;
  timeLeft = 20;
  countDown.textContent = "00:20";
  currentProgress.textContent = `0 / ${totalQuestions}`;
  question.textContent = "Get ready...";
};

const counter = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countDown.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (time === 0) {
    endGame(false);
  } else {
    timerID = setTimeout(() => counter(time - 1), 1000);
  }
};

// 🎯 Ask question
const ask = () => {
  if (questionIndex >= totalQuestions) {
    endGame(true);
    return;
  }

  const randomQ = mcqQuestions[Math.floor(Math.random() * mcqQuestions.length)];
  const { question: q, options: opt, answer } = randomQ;

  question.textContent = q;
  currentProgress.textContent = `${questionIndex + 1} / ${totalQuestions}`;

  for (let i = 0; i < 4; i++) {
    const choice = options.children[i];
    choice.textContent = opt[i];
    choice.onclick = () => {
      if (choice.textContent === answer) {
        score++;
      }
      questionIndex++;
      ask();
    };
  }
};

// 💣 End game
const endGame = (completed) => {
  clearTimeout(timerID);
  beep.pause();
  bomb.classList.remove("started");

  if (completed && score === totalQuestions) {
    bomb.src = imageUrls.congratulations;
  } else {
    bomb.src = imageUrls.explosion;
    setTimeout(() => (bomb.src = imageUrls.explodedImage), 1000);
  }

  if (score > parseInt(highestScore.textContent)) {
    highestScore.textContent = score;
    localStorage.setItem("highestScore", score);
  }

  question.textContent = `Your Score: ${score}/${totalQuestions}`;
  currentProgress.textContent = "Game Over";
};

// // 🏆 Load stored high score
window.addEventListener("load", () => {
  const savedScore = localStorage.getItem("highestScore");
  if (savedScore) {
    highestScore.textContent = savedScore;
  }
});
