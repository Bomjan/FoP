# Bomb Diffuser Game

> **Gyalpozhing College of Information Technology**  
> Fundamentals of Programming — JavaScript Interactive Game — CA2
> Developed by **Sundra Bomjan** SOC C

---

## Project Overview

**Bomb Diffuser** is a timed multiple-choice quiz game built using **HTML**, **CSS**, and **JavaScript**.  
The player must answer all questions before the timer runs out — otherwise, the bomb explodes.  
Each correct answer increases the score, and the game continues until all questions are answered or time expires.  
The **highest score** is automatically saved in the browser’s **Local Storage**.

---

## Learning Outcomes

By completing this project, the following learning outcomes were achieved:

1. Combined **HTML, CSS, and JavaScript** to create an interactive, browser-based game.
2. Practiced using **JavaScript functions, data types, and event-driven logic**.
3. Implemented **real-time interactivity** with DOM manipulation and animation.
4. Designed a clean, engaging **graphical interface** that updates dynamically during gameplay.

---

## Objectives

- Design a responsive and visually appealing browser game.
- Implement event-driven logic to handle user actions.
- Use timers, conditions, and loops for dynamic gameplay.
- Apply persistent data storage using `localStorage`.
- Write modular and maintainable JavaScript code.

---

## Game Description

### How to Play

1. Click **Start** to begin the countdown.
2. A random question appears with four possible answers.
3. Choose all correct options before time runs out.
4. Each correct answer increases your score.
5. If the timer reaches zero or you finish all questions, the bomb explodes or celebrates depending on performance.
6. The highest score remains saved even after refreshing the page.

---

## System Design

| Component        | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| **HTML**         | Defines the structure — game title, bomb image, timer, question box, and options. |
| **CSS**          | Controls layout, animations, and aesthetic design.                                |
| **JavaScript**   | Handles logic — countdown, random questions, score tracking, and interactivity.   |
| **questions.js** | Contains the question bank (objects with `question`, `options`, and `answer`).    |

---

## Code Structure and Style

- **Clear variable names** and consistent indentation throughout (2 space indentations).
- **Global variables minimized** — most state managed within modular functions.
- Organized into **logical, reusable functions**:
  - `gameReset()`
  - `counter(time)`
  - `ask()`
  - `endGame(completed)`
- Utilizes **modern JavaScript (ES6+)** syntax:
  - Arrow functions
  - Template literals
  - Object destructuring
- **Well-commented code** for readability and future maintenance.

---

## Game Complexity and Features

- Dynamic **question generation** from a predefined data array.
- **Recursive timer** logic with event-driven updates.
- Persistent **high score storage** using `localStorage`.
- Animated **bomb visuals**, explosion effects, and optional sound cues.
- Modular and **extensible structure**, allowing easy feature expansion.

---

## Future Enhancements

- Add **sound effects** for correct and wrong answers.
- Introduce **difficulty levels** — Easy, Medium, and Hard.
- Include **question categories** (Science, Tech, General Knowledge).
- Add **player name input** and a **leaderboard system**.
- Implement **dark/light mode** for better user accessibility.

---

## Author’s Reflection

> Developing this project enhanced my understanding of **event-driven JavaScript**, **DOM manipulation**, and **modular programming**.  
> I learned to manage asynchronous timers and dynamic state updates effectively.  
> The process refined both my **technical problem-solving** and **design thinking**, allowing me to blend functionality with an engaging user experience.

---

## Screenshot

![Game Screenshot](https://i.postimg.cc/gcfw7YPn/Screenshot-from-2025-11-04-15-55-21.png)

---

### Thank You <3

---
