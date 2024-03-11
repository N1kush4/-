// 1. კალკულატორი

// function calculator() {
//     let num1 = prompt("Enter the first number:");
//     let num2 = prompt("Enter second number:");

//     if(isNaN(num1) || isNaN(num2)) {
//         console.log("Invalid input. Enter valid numbers");
//         return;
//     }


//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     let operation  = prompt ("Enter the operation (+, -, *, /):");
    
//     let result;

//     switch(operation) {
//         case '+':
//             result = num1 + num2;
//             break;

//            case '-':
//             result = num1 - num2;
//             break;
            
//             case '*':
//                 result = num1 * num2;
//                 break;

//                 case '/':
//                     if (num2 === 0) {
//                         console.log("Error:");
//                         return;
//                     }
//                     result = num1 / num2;
//                     break;
//                     default:
//                         console.log("invalid operation");
//                         return;
//     }

//     console.log(`Result: ${result}`);
// }

// calculator();







// 2. გამოიცანი რიცხვი


// let numberToGuess = Math.floor(Math.random() * 15) + 1;
// console.log(numberToGuess)

// let timesForGuess = 1

// const guessTheNumber = () => {
//     let userNum = prompt ('enter number');

//     while (parseInt(userNum) !== numberToGuess) {
//         timesForGuess++
//         if (userNum < numberToGuess) {
//             alert("enter higher number");
//         }else if (userNum > numberToGuess) {
//             alert ("enter lower number");
//         }
//         userNum = prompt ('enter number');
//     }
    
//     alert(`Congratulation! You guessed the number. try: ${timesForGuess}`);
// }

// guessTheNumber();






// 3. HANGMAN



// const words = ["javascript", "hangman", "programming", "coding", "computer", "developer"];


// function chooseWord() {
//     return words[Math.floor(Math.random() * words.length)];
// }


// function displayWord(word, guessedLetters) {
//     let displayedWord = "";
//     for (let letter of word) {
//         if (guessedLetters.includes(letter)) {
//             displayedWord += letter;
//         } else {
//             displayedWord += "_";
//         }
//     }
//     return displayedWord;



// function hangman() {
//     console.log("Welcome to Hangman!");
//     let word = chooseWord("javascript");
//     let guessedLetters = [];
//     let attempts = 6;

//     while (true) {
//         console.log("\nAttempts left:", attempts);
//         console.log("Word:", displayWord(word, guessedLetters));

//         let guess = prompt("Guess a letter: ").toLowerCase();

//         if (guessedLetters.includes(guess)) {
//             console.log("You already guessed that letter.");
//             continue;
//         } else if (word.includes(guess)) {
//             guessedLetters.push(guess);
//             if (new Set(word.split('').filter(letter => !guessedLetters.includes(letter))).size === 0) {
//                 console.log("Congratulations! You guessed the word:", word);
//                 break;
//             }
//         } else {
//             attempts--;
//             console.log("Incorrect guess!");
//             if (attempts === 0) {
//                 console.log("You've run out of attempts. The word was:", word);
//                 break;
//             }
//         }
//     }
// }

// hangman();








// 4. თარჯიმანი


// const dictionary = {
//     "hello": "hola",
//     "world": "mundo",
//     "good": "bueno",
//     "morning": "mañana",
//     "evening": "tarde",
// };


// function translate(word) {
    
//     if (dictionary.hasOwnProperty(word)) {
//         return dictionary[word];
//     } else {
//         return "Translation not found";
//     }
// }


// function translateText() {
   
//     let word = prompt("Enter a word to translate to Spanish:").toLowerCase();

//     let translation = translate(word);


//     alert("Translation: " + translation);
// }


// translateText();







// 5. ATM

// var userData = [
//     ["Giorgi", "123456", 1000],
//     ["Ana", "123456789", 5000]
// ]

// function checkBalance(username, pin) {
//     for(var i = 0; i < userData.length; i++){
//         if(userData[i][0] === username && userData[i][1 === pin]){
//             return userData[i][2]
//         }
//     }
//     return 'Invalid credential'
// }

// function deposit(username, pin, amount){
//     for(var i = 0; i < userData.length; i++){
//         if(userData[i][0] === username && userData[i][1 === pin]){
//         userData[i][2] += amount;
//         return 'Deposit succsesful. new balance : ' + userData[i][2];
//         }
//     }
//     return 'Invalid credential'
// }

// function withdrawal(username, pin, amount){
//     for(var i = 0; i < userData.length; i++){
//         if(userData[i][0] === username && userData[i][1 === pin]){
//             if(userData[i][2] >= amount){
//                 userData[i][2] -= amount;
//                 return 'withdrawal succsesful. new balance : ' + userData[i][2];
//             }else{
//                 return 'The requested amount is too big'
//             }
//         }
//     }
//     return 'Invalid credential'
// }

// console.log(checkBalance('Giorgi', '123456'));
// console.log(deposit('Giorgi', '123456', 1000));
// console.log(withdrawal('Giorgi', '123456', 400));
// console.log(checkBalance('123sad5', '123456'));