// Assignment Code
var generateBtn = document.querySelector("#generate");

//Will contribute random lowercase letters
function lowerCaseRandom(){

  var lowerLetter = "abcdefghijklmnopqrstuvwxyz"

  return lowerLetter[Math.floor(Math.random()*lowerLetter.length)];

}

//Will contribute random uppercase letters
function upperCaseRandom(){

  var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return upperLetter[Math.floor(Math.random()*upperLetter.length)];
}


//Will contribute random special characters. 
//Note: one quotation mark is different due to break character.
function specialCharacterRandom(){

  var specialChar = "!@#$%^&*()_+-={}[]:\"';<>?,./`~"

  return specialChar[Math.floor(Math.random()*specialChar.length)];
}


//Will contribute random single diget numbers
function numberRandom(){

  var num = "0123456789"

  return num[Math.floor(Math.random()*num.length)];

}

function passGen(){
  
    var breakpoint = true;
  
    var secret = '';
  
    var passLngth = Number(window.prompt('Enter character length','10'));
  
    console.log("inceptive value: " +passLngth )

    console.log(typeof passLngth)

    //First attempt at while loop. Don't fail me now Youtube.

    while (breakpoint ==true) {
       //Too many else if's for my linking. Will see if possible to replace with switch in future.
      if (passLngth === 0){

        console.log("checking breakpoint 0 " +passLngth);
        
        return "Your Secure Password";
      }

      else if (!numbersAdmitted(passLngth)){

          window.alert("Password character length may only be a number from 8 to 128",'10');

          passLngth = Number(window.prompt("Please enter value for the character length from 8 and 128"));
    }


      else if (passLngth >= 8 && passLngth <= 129){

          console.log("checking breakpoint >=8 <=128" +passLngth);

            break;}



      else if (passLngth === null){

        console.log("checking breakpoint null" +passLngth);

        return "Your Secure Password";
      }


      
      else if (passLngth < 8 || passLngth> 128){

        console.log("checking breakpoint" +passLngth);
            
            window.alert("Password character length can only be between 8-128");

            passLngth = Number(window.prompt('Enter character length', '10'));
          } 

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
