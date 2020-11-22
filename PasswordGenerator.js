// User inputs
let length = 8;
let isLowerCase = true;
let isUpperCase = true;
let isNumber = true;
let isSpecialCharacter = true;

// Creating Password
let characterType;
let passwordCharacter;
let password = '';
let passwordCharCheck;

// Scanning for if character exists
let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let specialCharacters = '!\"#$%&\'\(\)*+,-./';

// Keeping track of numbers of characters
let numberOfLowerCase = 0;
let numberOfUpperCase = 0;
let numberOfNumbers = 0;
let numberOfSpecialCharacters = 0;

// Main Method
while(numberOfLowerCase == 0 ||numberOfUpperCase == 0 || numberOfNumbers == 0 || numberOfSpecialCharacters == 0) {
    generatePassword();
    passwordCheck();
}

console.log("Your password: " + password);
//console.log("To help you remember: " + password);



// Functions

function generateChar() {
    do {
        characterType = (1 + Math.floor(Math.random() * 4));

        if(characterType == 1 && isLowerCase == true){
            passwordCharacter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }
    
        if(characterType == 2 && isUpperCase == true){
            passwordCharacter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }

        if(characterType == 3 && isNumber == true){
            passwordCharacter = String.fromCharCode(48 + Math.floor(Math.random() * 10));
        }

        if(characterType == 4 && isSpecialCharacter == true){
            passwordCharacter = String.fromCharCode(33 + Math.floor(Math.random() * 15));
        }
    } while (passwordCharacter == undefined)
}

function generatePassword() {
    for(let i = 0; i < length ; i++){
        generateChar();

        while(passwordCharacter == password.charAt(i - 1))
        {
            generateChar();
        }

        password += passwordCharacter;
        console.log(passwordCharacter);
    }
}

function passwordCheck() {

    numberOfLowerCase = 0;
    numberOfUpperCase = 0;
    numberOfNumbers = 0;
    numberOfSpecialCharacters = 0;

    for(let i = 0; i < length ; i++) {
        if (lowerCaseAlphabet.indexOf(password.charAt(i)) >= 0) {
            numberOfLowerCase++;
        }
        if (upperCaseAlphabet.indexOf(password.charAt(i)) >= 0) {
            numberOfUpperCase++;
        }
        if (numbers.indexOf(password.charAt(i)) >= 0) {
            numberOfNumbers++;
        }
        if (specialCharacters.indexOf(password.charAt(i)) >= 0) {
            numberOfSpecialCharacters++;
        }
    }
}

