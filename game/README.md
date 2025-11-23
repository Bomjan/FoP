# Bomb Diffuser Game

> **Gyalpozhing College of Information Technology**  
> Fundamentals of Programming — JavaScript Interactive Game — CA2  
> Developed by **Sundra Bomjan** | SOC C

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Project Overview

**Bomb Diffuser** is an adrenaline-pumping, timed multiple-choice quiz game built with **HTML**, **CSS**, and **JavaScript**.

Race against the clock to answer questions correctly before the bomb explodes! Each correct answer brings you closer to victory, while the ticking timer keeps the pressure on. Your **highest score** is automatically saved using browser **Local Storage**, so you can always try to beat your personal best.

---

## Learning Outcomes

This project demonstrates mastery of:

1. **Full-stack web development** using HTML, CSS, and JavaScript
2. **Event-driven programming** and DOM manipulation
3. **Algorithm implementation** (Fisher-Yates shuffle for randomization)
4. **State management** with persistent data storage
5. **UI/UX design** with animations and visual feedback

---

## How to Play

1. Click **START** to activate the bomb timer
2. Read the question and select the correct answer from four options
3. Answer **8 questions** before time runs out
4. Each correct answer increases your score
5. Complete all questions to defuse the bomb — or watch it explode!

> **Note**: Answer positions are randomized each time for fair gameplay.

---

## Technical Implementation

### System Architecture

| Component          | Technology | Purpose                                                    |
| ------------------ | ---------- | ---------------------------------------------------------- |
| **index.html**     | HTML5      | Semantic structure and layout                              |
| **style.css**      | CSS3       | Responsive design, animations, and visual polish           |
| **main.js**        | JavaScript | Game logic, timer, scoring, and event handling             |
| **questions.js**   | JavaScript | Question bank with 100+ questions across multiple topics   |

### Key Features

✅ **Randomized Questions** — Questions are selected randomly from a pool of 100+  
✅ **Shuffled Answers** — Fisher-Yates algorithm ensures answer positions are unpredictable  
✅ **Dynamic Timer** — Countdown with visual tension (critical state at <10 seconds)  
✅ **Pulse Animation** — Bomb pulses faster as time runs out  
✅ **High Score Tracking** — Persistent storage using `localStorage`  
✅ **Responsive Design** — Clean, polished UI with smooth interactions  

---

## Code Quality

### Modern JavaScript (ES6+)
- Arrow functions for concise syntax
- Template literals for dynamic strings
- Object destructuring for cleaner code
- Array methods (`map`, `forEach`) for functional programming

### Modular Architecture
```javascript
gameReset()           // Initialize game state
counter(time)         // Recursive countdown logic
shuffleArray(array)   // Fisher-Yates randomization
ask()                 // Display questions with shuffled options
endGame(completed)    // Handle win/loss scenarios
```

### Clean Code Principles
- Consistent 2-space indentation
- Descriptive variable and function names
- Minimal global state
- Well-commented for maintainability

---

## Recent Improvements

### Visual Polish
- **Digital Timer**: Monospace font with gold glow effect
- **Pulse Animation**: Smooth heartbeat effect on the bomb
- **Critical State**: Red glow when time drops below 10 seconds
- **Hover Effects**: Subtle color changes on interactive elements

### Gameplay Enhancement
- **Answer Shuffling**: Prevents predictable correct answer positions
- **Improved Spacing**: Better padding and margins throughout
- **Smooth Transitions**: All interactions feel polished and responsive

---

## Question Categories

The game includes 100+ questions across:
- **JavaScript** (syntax, methods, concepts)
- **HTML** (tags, attributes, structure)
- **CSS** (properties, selectors, layout)
- **Database/SQL** (queries, commands)
- **Linux** (terminal commands)
- **Bhutan History** (culture, geography, facts)
- **General Knowledge** (science, world facts)
- **Logic Puzzles** (patterns, reasoning)

---

## Design Philosophy

The UI uses a **dark, sophisticated color palette** with gold accents:
- **Primary**: Dark brown/charcoal (`#1a1a1a`, `#201f1d`)
- **Accent**: Warm gold (`#d8a85f`)
- **Typography**: Inter/Poppins for readability
- **Animations**: Subtle, purposeful, non-distracting

---

## Future Enhancements

- [ ] **Sound Effects** — Ticking, explosions, and success sounds
- [ ] **Difficulty Levels** — Easy (30s), Medium (20s), Hard (10s)
- [ ] **Category Selection** — Filter questions by topic
- [ ] **Leaderboard** — Track top scores with player names
- [ ] **Dark/Light Mode** — Theme toggle for accessibility
- [ ] **Mobile Optimization** — Touch-friendly responsive design

---

## Developer Reflection

> Building **Bomb Diffuser** deepened my understanding of JavaScript's event-driven architecture and the importance of clean, modular code. Implementing the Fisher-Yates shuffle algorithm taught me about randomization best practices, while managing asynchronous timers reinforced my grasp of JavaScript's execution model.
>
> The iterative design process—from initial implementation to visual polish—highlighted the value of user feedback and continuous improvement. This project successfully balances technical complexity with an engaging, polished user experience.

---

## Screenshot

![Game Screenshot](./Materials/screenshot.png)

---

## License

This project was created as an academic assignment for **Gyalpozhing College of Information Technology**.

---

**Made with love by Sundra Bomjan**

