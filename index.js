
let words = ["harry potter","spider man", "cars", "transformers", "interstellar","parasite","casablanca","the godfather","the lord of the rings"];
let wordPrediction = [];
let heart = 6; // hakkımız canımız
let gameWord;
let prediction;
let wrongGuessCount = 0;
let hint = 2;
let wrongGuesses = [];
const hangmanImage = document.querySelector(".hangman img");

let enterListener = function(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("letterInput");
    if (input === document.activeElement &&
        document.getElementById("guess-button").hasAttribute("onclick")) {
      guessLetter();
    }
  }
};


document.getElementById("start-game").addEventListener("click", function() {
      setTimeout(() => {
        this.setAttribute("hidden", true);
      }, 200);
      setTimeout(function(){
        document.getElementById('hidden-box').removeAttribute("hidden");
        RandomWord();
        
    },200)
    });


function RandomWord() {
    document.addEventListener("keydown", enterListener);
    
    let randomWordIndex = Math.floor(Math.random() * words.length);
    gameWord = words[randomWordIndex];
    wordPrediction = new Array(gameWord.length); //5 harfli 
   
     for (let i = 0; i < wordPrediction.length; i++)
    {
        wordPrediction[i] = gameWord[i] === ' ' ? '\u00A0' : '_';
    }       
    renderWord();
    document.getElementById("wrongLetters").textContent = "Wrong Letters : ";
    document.getElementById("heart").textContent = "❤️ : " + heart + '\u00A0';
    document.getElementById("hint").textContent = "💡 : " + hint;
    
}

function renderWord() {
  const container = document.querySelector(".text");
  container.innerHTML = " ";
  wordPrediction.forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    container.appendChild(span);
  });
}

function guessLetter() {
  const input = document.getElementById("letterInput");
  const letter = input.value.toLowerCase();
  input.value = "";

  if (!letter.match(/[a-z]/) || letter.length !== 1) return;

  let found = false;

  for (let i = 0; i < gameWord.length; i++) {
    if (gameWord[i].toLowerCase() === letter && wordPrediction[i] === '_') {
      wordPrediction[i] = gameWord[i]; // Büyük/küçük korunsun
      
      found = true;
    }
  }
  renderWord();

  if (!found && !wrongGuesses.includes(letter) && gameWord.toLowerCase().includes(letter) === false) {
    heart--;
    wrongGuessCount++;
    wrongGuesses.push(letter);
    document.getElementById("wrongLetters").textContent = "Wrong Letters : " + wrongGuesses.join(', ');
    document.getElementById("heart").textContent = "❤️ : " + heart ;
    imageChange();
    
  }

  if (!wordPrediction.includes('_')) {
  
    game_Over();
    
    document.getElementById("status").textContent = "🎉 Congrats! You won!";
  } else if (heart==0) {
    document.getElementById("status").textContent = "😢 You lost! The word was : " + gameWord;
    game_Over();
  }

}

function giveHint(){

  if (hint <= 0) return;

  // Açılmamış harfleri topla (boş karakter olmayanlar)
  let undiscoveredLetters = [];

  for (let i = 0; i < gameWord.length; i++) {
    if (wordPrediction[i] === "_" && !undiscoveredLetters.includes(gameWord[i])) {
      undiscoveredLetters.push(gameWord[i]);
    }
  }

  // Açılmamış harf kalmadıysa işlem yapma
  if (undiscoveredLetters.length === 0) return;

  // Rastgele bir harf seç
  let randomLetter = undiscoveredLetters[Math.floor(Math.random() * undiscoveredLetters.length)];

  // O harfi tüm uygun yerlerde aç
  for (let i = 0; i < gameWord.length; i++) {
    if (gameWord[i] === randomLetter && wordPrediction[i] === "_") {
      wordPrediction[i] = randomLetter;
      renderWord();
    }
  }
  
 
  hint--;
  document.getElementById("hint").textContent="💡 : "+ hint;
  


  if ( hint == 0 || !wordPrediction.includes('_')){
    document.getElementById("hint-button").removeAttribute("onclick");
  }
  if (!wordPrediction.includes('_')){ 
    document.getElementById("status").textContent = "🎉 Congrats! You won!";
    game_Over()
  }
}

function game_Over()
{
    document.removeEventListener("keydown", enterListener);
    document.getElementById("guess-button").removeAttribute('onclick');
    document.getElementById("hint-button").removeAttribute('onclick');
    document.getElementById("new-game").removeAttribute("hidden");
    document.getElementById("new-game").addEventListener("click", function() {
        setTimeout(() => {
        this.setAttribute("hidden", true);
      }, 200);
        setTimeout(function(){
        heart = 6;
        hint = 2;
        wrongGuesses = [];
        wordPrediction = [];
        wrongGuessCount = 0;
        document.getElementById("guess-button").setAttribute('onclick','guessLetter()');
        document.getElementById("hint-button").setAttribute('onclick','giveHint()');
        document.getElementById("status").textContent = "";
        document.getElementById("wrongLetters").textContent="";
        hangmanImage.src= `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`;
        RandomWord();
        
        },200);
    });
}
function imageChange(){

  if (wrongGuessCount === 1) {
      hangmanImage.src = 
      `https://media.geeksforgeeks.org/wp-content/uploads/20240215173033/1.png`;
    }
    if (wrongGuessCount === 2) {
      hangmanImage.src = 
      
      `https://media.geeksforgeeks.org/wp-content/uploads/20240215173038/2.png`;
    }
    if (wrongGuessCount === 3) {
      hangmanImage.src = 
      `https://media.geeksforgeeks.org/wp-content/uploads/20240215172733/3.png`;
    }
    if (wrongGuessCount == 4) {
      hangmanImage.src = 
      `https://media.geeksforgeeks.org/wp-content/uploads/20240215173815/4.png`;
    }
    if (wrongGuessCount === 5) {
      hangmanImage.src = 
      `https://media.geeksforgeeks.org/wp-content/uploads/20240215173859/5.png`;
    }
    if (wrongGuessCount === 6) {
      hangmanImage.src =
      `https://media.geeksforgeeks.org/wp-content/uploads/20240215173931/6.png`;
    }
}
