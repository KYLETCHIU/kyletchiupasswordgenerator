// Assignment Code
var generateBtn = document.querySelector("#generate");

//Will contribute random lowercase letters
function lowerCaseRandom(){

  var LowerLetter = "abcdefghijklmnopqrstuvwxyz"

  return LowerLetter[Math.floor(Math.random()*LowerLetter.length)];

}

//Will contribute random uppercase letters
function upperCaseRandom(){

  var UpperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return UpperLetter[Math.floor(Math.random()*UpperLetter.length)];
}

//Will contribute random special characters. Note: one quotation mark is different due to break character.
function specialCharacterRandom(){

  var SpecialChar = "!@#$%^&*()_+-={}[]:\"';<>?,./`~"

  return SpecialChar[Math.floor(Math.random()*SpecialChar.length)];
}

//Will contribute random single diget numbers
function numberRandom(){

  var Num = "0123456789"

  return Num[Math.floor(Math.random()*Num.length)];

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
