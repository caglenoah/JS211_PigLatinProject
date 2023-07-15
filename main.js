// declares JavaScript's "strict" mode. it enforces stricter parsing and error handling during runtime. helps write cleaner code and catch more errors and bugs that might otherwise go unnoticed.
'use strict';

//sets up readline module module and creates an interface to read input from the console, and to write output on the console. 
//inport the 'readline' module to read input from the console
const readline = require('readline');
//creates an interface for reading input. It tells it where to get its input data from, and where to write it's output 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//named variable that hold a finction to translate word to pigLatin
const pigLatin = (word) => {
//trims and converts words to lowercase
  let inputWord = word.trim().toLowerCase();
  //checks if work is empty
  if (inputWord.length === 0) {
    //asks user to enter a valid input
    return "Please enter a valid word.";
  }

  //checks if the word starts with a vowel by calling th 'isVowel' helper function
  if (isVowel(inputWord[0])) {
    //if it does it appends "yay" to the word and returns the translated word.
    return inputWord + "yay";
  } else { // if it doesnt, this function extracts the first character and moves it to the end of the word, followed by "ay". This forms the translated word
    //the value of the named variable takes the first character and moves it to the end of the word. 
    let firstCharacter = inputWord.slice(0, 1);
    //this variable holds the rest of the word 
    let restOfWord = inputWord.slice(1);
    //returns translated word
    return restOfWord + firstCharacter + "ay";
  }
};

//helper function to check if a letter is a vowel to check if word starts with a vowel
const isVowel = (letter) => {
  // assigning the vowels to a variable. this tells the console what vowels are
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //this returns the character if it is a vowel when the function is running it's check
  return vowels.includes(letter);
};



//prompts the user to enter a word
//calls our bucket 'rl' which holds our readline variable
rl.question('Enter a word: ', (answer) => {
  //translates the word to pig latin by calling the 'pigLatin' fuction
  const translation = pigLatin(answer);
  //displays the translation
  console.log(`Translation: ${translation}`);
  // closes the readline interface
  rl.close();
});

