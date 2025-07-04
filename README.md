# 🎮 JavaScript Hangman Game (Movie Edition)

This project is a browser-based version of the classic **Hangman** game, built using HTML, CSS, and JavaScript. The game uses popular **movie titles** as the hidden words.

## 🚀 Getting Started

To run the project:

1. Clone this repository or download the files.
2. Open `index.html` in your browser.

> No server setup is required — everything runs locally in the browser.

## 🕹️ How to Play

- When the game starts, a random movie title is selected.
- Guess letters to reveal the hidden word.
- Wrong guesses reduce your hearts (`❤️`) and update the hangman image.
- You win by guessing all letters correctly before your hearts run out.
- You have **6 wrong guess attempts**.
- You also have **2 hints (`💡`)**, each revealing a random unrevealed letter.

### 💻 Live Demo
Try it here:

> 🔗 [Play on GitHub Pages](https://cakirgozbahar.github.io/hangman-game/)

## ⌨️ Controls

- Type a letter into the input box and press `Enter` to guess.
- Or click the `Guess` button.
- Click the `Hint` button to reveal a random unrevealed letter.
- Click `New Game` to start over after the game ends.

## 📸 Features

- Movie-based word list
- Support for multi-word titles with spaces
- Visual hangman image that changes with each wrong guess
- Tracks wrong guesses and displays them
- Hint system that reveals unrevealed letters only
- `Enter` key support for better UX
- Disables input after game over

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Hangman images from [GeeksForGeeks](https://www.geeksforgeeks.org)

## 🍦 Why Vanilla JavaScript?

This project is built using **Vanilla JavaScript**, which means it does not rely on any external JavaScript libraries or frameworks like React, Vue, Angular, or jQuery.

### 🔍 How can we tell it's Vanilla JS?

- ✅ **No imports** from external libraries (`import React`, `Vue`, etc.)
- ✅ **No CDN script tags** linking to libraries (e.g., no `<script src="https://cdn.jsdelivr.net/...">`)
- ✅ Uses only **native Web APIs** such as:
  - `document.getElementById(...)`
  - `document.querySelector(...)`
  - `addEventListener(...)`
- ✅ No `node_modules`, `package.json`, or build tools (like Webpack or Vite)
- ✅ Runs by simply opening `index.html` — no build or dev server required

This makes the project lightweight, fast, and easy to understand for beginners who want to learn how to interact with the DOM using pure JavaScript.

> ✅ Perfect for learning core web development skills without abstraction layers.


## 🧠 Ideas for Improvement

- Mobile responsiveness
- Dark/light theme toggle
- Sound effects


## 📜 License

This project is open source. Feel free to use, modify, and share it as you like.
