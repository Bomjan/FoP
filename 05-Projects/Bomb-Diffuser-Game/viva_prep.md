# Viva Prep: Potential Questions & Answers

Use this cheat sheet to prepare for the Q&A session.

## Technical Questions

### 1. "Explain how your shuffle function works."
**Answer:**
"I used the **Fisher-Yates shuffle algorithm**. It works by iterating through the array from the last element to the first. In each iteration, it picks a random index from the remaining unshuffled portion (0 to i) and swaps the current element with that random element. This ensures that every possible permutation of the array is equally likely, making the randomization fair and unpredictable."

### 2. "Why did you use `setTimeout` instead of `setInterval` for the timer?"
**Answer:**
"I chose a recursive `setTimeout` pattern because it offers better control. With `setInterval`, if the code execution takes longer than the interval, calls can stack up. `setTimeout` guarantees that the next countdown step only happens *after* the current one processes. It also makes it easier to adjust the timing dynamically if I wanted to (like speeding up time), though in this case, it was mostly for reliability and clean recursion."

### 3. "How are you persisting the High Score?"
**Answer:**
"I'm using the browser's `localStorage` API. When the game ends, I check if the current `score` is greater than the stored `highestScore`. If it is, I update the `localStorage` item. On page load, I retrieve this value to display it. This allows the data to persist even if the user refreshes the page or closes the browser."

### 4. "What is `type='module'` in your script tag?"
**Answer:**
"The `type='module'` attribute allows me to use ES6 features like `import` and `export`. In my `main.js`, I import the `mcqQuestions` array from `questions.js`. This keeps my main logic file clean and separates the data (the questions) from the behavior (the game logic)."

### 5. "How do you handle the 'Critical State' (red glow)?"
**Answer:**
"Inside my `counter` function, I check if `time <= 10`. If it is, I add a CSS class called `.critical-state` to the bomb's container. In my CSS, this class changes the animation duration of the pulse effect to be faster (from 1s to roughly 0.2s) and adds a red box-shadow/filter. This creates visual urgency without needing complex JavaScript animation logic."

## Logic & Gameplay Questions

### 6. "How do you ensure the correct answer is tracked after shuffling?"
**Answer:**
"That was a key challenge. In `questions.js`, the answer is stored as a string. When I load a question, I first create a temporary array of objects where each option has a `text` property and an `isCorrect` boolean flag (checking if it matches the answer string). *Then* I shuffle this array of objects. This way, the `isCorrect` flag moves *with* the answer text, so I always know which button is the right one, regardless of where it ends up on the screen."

### 7. "What happens if I add more questions to `questions.js`?"
**Answer:**
"The game will automatically support it. My logic randomly selects a question from the `mcqQuestions` array using `mcqQuestions.length`. So I can add 1000 questions to that file, and the game will simply have a larger pool to pick from without needing any code changes in `main.js`."

## Soft Skills / Reflection

### 8. "What would you do differently if you had more time?"
**Answer:**
"I would definitely implement a backend. Right now, high scores are local to the user's machine. Using a simple database like Firebase or MongoDB would allow for a global leaderboard, which would make the game much more competitive. I'd also add sound toggles for better accessibility."
