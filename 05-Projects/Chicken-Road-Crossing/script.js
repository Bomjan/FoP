// get canvas and the tools for drawing game elements
const c = document.getElementById("gameCanvas"),
  ctx = c.getContext("2d"),
  // load images from the
  road = document.getElementById("roadImg"),
  playerImg = document.getElementById("playerImg"),
  carRed = document.getElementById("carRedImg"),
  carBlue = document.getElementById("carBlueImg");

// game variables
let player = { x: 450, y: 460, w: 40, h: 40, s: 4 },
  cars = [],
  score = 0,
  lives = 3,
  level = 1,
  run = false,
  keys = {},
  highScore = 0;

// load high score from localStorage when the page loads
function loadHighScore() {
  const saved = localStorage.getItem('chickenRoadHighScore');
  highScore = saved ? parseInt(saved) : 0;
  document.getElementById('highScore').innerText = highScore;
}

// save high score to localStorage
function saveHighScore() {
  localStorage.setItem('chickenRoadHighScore', highScore);
}

// instructs the cars to move in different lanes
const lanes = [150, 220, 290, 360];

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  // draw road
  ctx.drawImage(road, 0, 120, c.width, 300);
  // draw player
  ctx.drawImage(
    playerImg,
    player.x - player.w / 2,
    player.y - player.h / 2,
    player.w,
    player.h
  );

  //  dtaw all cars from cars[]
  cars.forEach((car) =>
    ctx.drawImage(
      car.color == "red" ? carRed : carBlue,
      car.x,
      car.y,
      car.w,
      car.h
    )
  );
}

// this is to spawn a random incoming car in randomv direction and lane
function spawnCar() {
  // dir is direction of the car
  let dir = Math.random() < 0.5 ? 1 : -1,
    // this is to choose the lane following random index
    y = lanes[Math.floor(Math.random() * lanes.length)],
    // starting position of the car depending on its respective direction
    x = dir == 1 ? -60 : c.width + 60;
  // add the new cars into cars[]
  cars.push({
    x,
    y,
    w: 80,
    h: 50,
    speed: (2 + Math.random() * 2) * dir * level ** 0.5,
    color: dir == 1 ? "red" : "blue",
  });
}

// this is the direction for moving the player depending on the keys on the keyboard
function movePlayer() {
  if (keys.ArrowUp) player.y -= player.s;
  if (keys.ArrowDown) player.y += player.s;
  if (keys.ArrowLeft) player.x -= player.s;
  if (keys.ArrowRight) player.x += player.s;

  // lets the character move only inside the canvas
  player.x = Math.max(player.w / 2, Math.min(c.width - player.w / 2, player.x));
  player.y = Math.max(
    player.h / 2,
    Math.min(c.height - player.h / 2, player.y)
  );
  // this is the co ndition if the player crosses all the existing lane and reaches the top
  if (player.y < 80) {
    score += 50;
    level++;
    player.x = 450;
    player.y = 460;
    updateStats();
  }
}

// to check the collisions between the player and the incoming cars
function checkCollisions() {
  cars.forEach((car) => {
    let dx = player.x - Math.max(car.x, Math.min(player.x, car.x + car.w)),
      dy = player.y - Math.max(car.y, Math.min(player.y, car.y + car.h));
    if (dx * dx + dy * dy < (player.w / 2) ** 2) {
      lives--;
      player.x = 450;
      player.y = 460;
      updateStats();
      // end the game instantly if there is no lives left
      if (lives <= 0) {
        endGame();
        setTimeout(() => location.reload(), 1500); // reloading after 1 1/2 seconds because not reloading is giving bug
      }
    }
  });
}

function updateCars() {
  cars.forEach((car) => (car.x += car.speed));
  cars = cars.filter((car) => car.x > -150 && car.x < c.width + 150);
}

// display score, lives, level, and high score
function updateStats() {
  document.getElementById("score").innerText = score;
  document.getElementById("lives").innerText = lives;
  document.getElementById("level").innerText = level;
  document.getElementById("highScore").innerText = highScore;
}

// main game update loop
function loop() {
  if (run) {
    movePlayer();
    updateCars();
    checkCollisions();
    draw();
    requestAnimationFrame(loop);
  }
}

// start the game
function startGame() {
  document.getElementById("game-over").innerText = "";
  if (!run) {
    run = true;
    setInterval(() => spawnCar(), 1000);
    loop();
  }
}

// end the game
function endGame() {
  document.getElementById("game-over").innerText = "Game Over";
  
  // check if current score beats the high score
  if (score > highScore) {
    highScore = score;
    saveHighScore();
  }
  
  cars = [];
  score = lives = level = 0;
  player.x = 450;
  player.y = 460;
  run = false;
  updateStats();
}
// handles the keyboard input
window.addEventListener("keydown", (e) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key))
    e.preventDefault();
  keys[e.key] = true;
});
window.addEventListener("keyup", (e) => (keys[e.key] = false));

// start button listener
document.getElementById("startBtn").addEventListener("click", startGame);

// instructions toggle listener
document.getElementById("instructionsBtn").addEventListener("click", () => {
  const panel = document.getElementById("instructionsPanel");
  panel.classList.toggle("hidden");
});

// initialize high score on page load
loadHighScore();
