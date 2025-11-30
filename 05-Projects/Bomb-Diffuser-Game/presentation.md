# Bomb Diffuser Game - Presentation Slides

**Time Estimate:** 5-7 Minutes Presentation + 3 Minutes Q&A
**Audience:** Lecturer/Technical
**Goal:** Demonstrate technical competency and functional gameplay.

---

## Slide 1: Title Slide
**Title:** Bomb Diffuser: An Interactive JS Game
**Subtitle:** Fundamentals of Programming - CA2
**Presenter:** Sundra Bomjan | SOC C
**Context:** Gyalpozhing College of Information Technology

**[Speaker Notes]**
- Good morning/afternoon.
- Today I am presenting "Bomb Diffuser", a web-based interactive quiz game developed as part of my CA2 assignment.
- The goal was to create an engaging way to test knowledge under pressure.

---

## Slide 2: Project Overview
**Concept:**
- A high-stakes, timed multiple-choice quiz.
- **Theme:** Defuse a bomb by answering questions correctly.
- **Objective:** Answer 8 questions before the timer runs out.
- **Tech Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+).

**[Speaker Notes]**
- The core concept is simple but effective: Gamification of learning.
- Instead of a standard quiz, users are "defusing a bomb".
- It uses standard web technologies without external frameworks to demonstrate core DOM manipulation and logic skills.

---

## Slide 3: Key Features
**What makes it special?**
1.  **Dynamic Timer:** Visual countdown with "Critical State" (red glow/fast pulse) at <10s.
2.  **Randomization:**
    - Questions selected randomly from a pool of 100+.
    - **Answer Shuffling:** Options are randomized so position A isn't always correct.
3.  **Persistence:** High Score saved via `localStorage`.
4.  **Audio/Visual Feedback:** Beeping sounds, explosion animations, and hover effects.

**[Speaker Notes]**
- I focused on User Experience (UX).
- The "Critical State" adds tension—the UI actually changes (turns red, pulses faster) as time runs out.
- Randomization ensures replayability; you can't just memorize "Option A is correct".

---

## Slide 4: Technical Architecture
**Code Structure:**
- `index.html`: Semantic structure (Flexbox containers).
- `style.css`: Custom animations (`@keyframes` for pulse) and responsive design.
- `questions.js`: Data module (ES6 export) containing an array of objects.
- `main.js`: The game engine.

**Key Concepts Applied:**
- **ES6 Modules:** Importing `mcqQuestions` to keep code clean.
- **DOM Manipulation:** Dynamically creating option elements.
- **Event Handling:** Click listeners for game start and answer selection.

**[Speaker Notes]**
- I separated concerns: Data is in `questions.js`, Logic in `main.js`, and Presentation in CSS.
- This modular approach makes the code easier to maintain and debug.

---

## Slide 5: Algorithm Spotlight - Fisher-Yates Shuffle
**The Problem:**
- `Math.random()` alone isn't enough to fairly shuffle answers.
- Simple swaps can lead to biased permutations.

**The Solution:**
- Implemented the **Fisher-Yates Shuffle Algorithm**.
- Iterates backwards through the array, swapping the current element with a random previous element.

**Code Snippet:**
```javascript
const shuffleArray = (array) => {
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
};
```

**[Speaker Notes]**
- This is the most technically interesting part of the project.
- I used Fisher-Yates to ensure that every permutation of answers is equally likely.
- This prevents the "predictable answer" pattern often found in simple quizzes.

---

## Slide 6: State Management & Timer Logic
**Game State:**
- `score`: Tracks current progress.
- `timeLeft`: Decrements every second.
- `timerID`: Stores the `setTimeout` ID to allow cancellation.

**The Recursive Timer:**
- Instead of `setInterval`, I used recursive `setTimeout` for better control.
- **Critical Logic:**
  - If `time <= 10`: Add `.critical-state` class (CSS animation speedup).
  - If `time === 0`: Trigger `endGame(false)`.

**[Speaker Notes]**
- Managing state was crucial.
- I used a recursive `counter` function.
- This allows me to check the state *every second*—updating the UI, checking for timeout, or stopping the clock immediately if the user wins.

---

## Slide 7: Live Demo
**[Transition to Browser]**

**Demo Checklist:**
1.  Show the **Start Screen** (clean UI).
2.  Click **Start** -> Point out the timer and "ticking" sound.
3.  Answer a few questions correctly (show score update).
4.  **Let the timer drop below 10s** -> Show the red glow/panic mode.
5.  **Let it explode** (Game Over screen).
6.  (Optional) Restart and win quickly if time permits.

---

## Slide 8: Challenges & Solutions
**Challenge 1: Timer Synchronization**
- *Issue:* Timer would keep running in the background after game over.
- *Fix:* `clearTimeout(timerID)` in the `endGame` function.

**Challenge 2: Randomization Integrity**
- *Issue:* Originally, the correct answer was always the first option in the code.
- *Fix:* Created an object `{ text, isCorrect }` *before* shuffling, so the "correct" tag travels with the answer.

**[Speaker Notes]**
- The hardest bug was the timer. It would sometimes trigger "Game Over" even after I had already restarted.
- I learned the importance of cleaning up side effects (clearing timeouts) when state changes.

---

## Slide 9: Future Improvements
1.  **Sound Toggle:** Mute button for accessibility.
2.  **Categories:** User can choose "History" or "JavaScript".
3.  **Backend Integration:** Save high scores to a database instead of LocalStorage.
4.  **Mobile Touch Events:** Better optimization for phone screens.

**[Speaker Notes]**
- While the game is functional, there is room to grow.
- Adding a backend would allow for a global leaderboard, which would be the next logical step.

---

## Slide 10: Conclusion
**Summary:**
- "Bomb Diffuser" successfully combines logic, DOM manipulation, and algorithm implementation.
- It meets all requirements for CA2: Interactive, persistent, and technically sound.

**Thank You!**
- Questions?

---
