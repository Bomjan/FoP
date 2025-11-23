import { mcqQuestions } from "./questions.js";

const highestScore = document.getElementById("highest-score");
const currentProgress = document.getElementById("current-progress");
const start = document.getElementById("start");
const countDown = document.getElementById("count-down");
const bomb = document.getElementById("bomb-image");
const beep = document.getElementById("bomb-sound");
const question = document.getElementById("question");
const options = document.getElementById("options");

highestScore.textContent = localStorage.getItem("highestScore") || 0;

const optionsArray = Array.from(options.children);

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
  // don't worry, this will just start wiggling animation lol
  bomb.classList.add("started");

  beep.currentTime = 0; // because the beep is being stopped anytime, it is necessary to start from the beginning
  beep.play();
  counter(timeLeft);
  ask();
});

const gameReset = () => {
  clearTimeout(timerID);
  bomb.src = imageUrls.timeBomb;
  bomb.parentElement.classList.remove("critical-state"); // Remove critical state
  bomb.style.animationDuration = "1s"; // Reset animation speed
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

  // Visual tension logic
  if (time <= 10) {
    bomb.parentElement.classList.add("critical-state");
    // Speed up the pulse as time runs out
    const duration = Math.max(0.2, time / 20); // Scale from 0.5s down to 0.2s roughly
    bomb.style.animationDuration = `${duration}s`;
  }

  if (time === 0) {
    endGame(false);
  } else {
    timerID = setTimeout(() => counter(time - 1), 1000);
  }
};

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// get random question from that rediculous long list of questions.
const ask = () => {
  if (questionIndex >= totalQuestions) {
    endGame(true);
    return;
  }

  const randomQ = mcqQuestions[Math.floor(Math.random() * mcqQuestions.length)];
  // because mcqQuestion is a list of objects, therefore we can destructure to grab multiple values in a line.
  const { question: q, options: opt, answer } = randomQ;

  question.textContent = q;
  currentProgress.textContent = `${questionIndex + 1} / ${totalQuestions}`;

  // Create array of option objects with correct answer flag
  const optionsWithCorrectFlag = opt.map((text) => ({
    text,
    isCorrect: text === answer,
  }));

  // Shuffle the options
  const shuffledOptions = shuffleArray(optionsWithCorrectFlag);

  // assign shuffled options to choices
  optionsArray.forEach((choice, index) => {
    const option = shuffledOptions[index];
    choice.textContent = option.text;
    choice.onclick = () => {
      if (option.isCorrect) {
        score++;
      }
      questionIndex++;
      ask();
    };
  });
};

const endGame = (completed) => {
  clearTimeout(timerID);
  beep.pause();
  bomb.classList.remove("started");
  bomb.parentElement.classList.remove("critical-state");

  if (completed && score === totalQuestions) {
    bomb.src = imageUrls.congratulations;
  } else {
    bomb.src = imageUrls.explosion;
    setTimeout(() => (bomb.src = imageUrls.explodedImage), 1000);
  }

  // modify the highest score only if the player breaks the highest score
  if (score > parseInt(highestScore.textContent)) {
    highestScore.textContent = score;
    localStorage.setItem("highestScore", score);
  }

  question.textContent = `Your Score: ${score}/${totalQuestions}`;
  currentProgress.textContent = "Game Over";

  optionsArray.forEach((choice) => (choice.onclick = null));
};
