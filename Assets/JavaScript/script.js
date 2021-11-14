//My take on Travery Media's Password Generator tutorial


//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');

const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');

const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');


const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

//First functions for random generation
const funcRando = {
	upper: getRandomUpper,

    lower: getRandomLower,

    symbol: getRandomSymbol,

	number: getRandomNumber}

//Add first click event to have text appear in text area
clipboard.addEventListener('click', () => {
const textarea = document.createElement('textarea');
 const password = resultEl.innerText;
        
if (!password) { return; }
        
textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
textarea.remove();

//Alert window for copied text
alert('Copied to clipboard');});

//Second event for clicked text. Used for check box options
generate.addEventListener('click', () => {
	const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasSymbol = symbolsEl.checked;
	const hasNumber = numbersEl.checked;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);});


//Function used to generate password. Will generate in result element
function generatePassword(upper, lower, symbol, number, length) {
let generatedPassword = '';
const typesCount = upper + lower + symbol + number ;
const typesArr = [{upper}, {lower}, {symbol}, {number}].filter(item => Object.values(item)[0]);
//All false returns filtered out of array. Super handy!
if(typesCount === 0) {
    return '';
}

// Loop used to generate text
for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
    });
}

const finalPassword = generatedPassword.slice(0, length);
//Results in final password
return finalPassword;
}
//Returns random upper case letters
function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Returns random lower case letter
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Returns random approved symbols
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
//Returns random numbers 0-9
function getRandomNumber() {
return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

