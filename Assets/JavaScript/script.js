//What feels like my 10th time of making a password generator work
var password=document.getElementById("password");
//Will generate a passsword. Simple function with simple variables.
 function generateRandomPassword() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*'\"_-+/,.;:~()0123456789";

    var passwordLength = 20;

    var password = "";
//My now fourth attempt at a loop. Hope if works better than the last ones.
 for (var i = 0; i <= passwordLength; i++) {

   var randomNumber = Math.floor(Math.random() * chars.length);

   password += chars.substring(randomNumber, randomNumber +1);}

        document.getElementById("password").value = password;
 }
 //Unlike the deathstar, this copy button is fully operational.
 function copyRandomPassword() {

    var copyText = document.getElementById("password");

    copyText.select();

    document.execCommand("copy"); 
 } 