import { mcqQuestions } from "./questions.js";

const highestScore = document.getElementById("highest-score");
const currentProgress = document.getElementById("current-progress");
const start = document.getElementById("start");
const countDown = document.getElementById("count-down");
const bomb = document.getElementById("bomb-image");
const beep = document.getElementById("bomb-sound");
const question = document.getElementById("question");
const options = document.getElementById("options");

const exploded = "https://i.postimg.cc/L5v9PTkR/exploded.png";

let numberOfQuestion = 0;
const totalQuestions = 8;
let answered = [];
let correct = [];
let answeredAll = false;
let timerID;

start.addEventListener("click", () => {
  bomb.classList.add("started");
  bomb.src = "https://i.postimg.cc/SK7SmnbW/timebomb.png";
  beep.currentTime = 0;
  beep.play();
  counter(20);
  ask();
});
const investigate = () => {
  clearTimeout(timerID);
  bomb.classList.remove("started");
  if (
    (answered.length == totalQuestions && answered == correct) ||
    answeredAll
  ) {
    bomb.src =
      "https://media.tenor.com/_r-UUCjuC9MAAAAM/congratulations-congrats.gif";
    bomb.style.width = "400px";
    bomb.style.height = "300px";
    bomb.style.marginLeft = "calc(50% - 200px)";
  } else {
    bomb.src = exploded;
  }
};
const counter = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countDown.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (time === 0) {
    investigate();
  } else {
    timerID = setTimeout(() => counter(time - 1), 1000);
  }
};

const questionSet = () => {
  let q = mcqQuestions[Math.floor(Math.random() * mcqQuestions.length)];

  return [q.question, q.options, q.answer];
};

const ask = () => {
  if (numberOfQuestion > totalQuestions) {
    investigate();
  }
  numberOfQuestion++;
  currentProgress.textContent = `${numberOfQuestion} / ${totalQuestions}`;

  const [ques, opt, ans] = questionSet();
  question.textContent = ques;

  for (let i = 0; i < 4; i++) {
    const x = options.children[i];
    x.textContent = opt[i];
    x.onclick = () => {
      answered.push(x.textContent);
      correct.push(ans);
      ask();
    };
  }
};
