var generateBtn = document.querySelector('#generate');

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}
// DECLARE GLOBAL VARAIBLES
var passwordLength
var userSpecialChar
var userUpperCase
var userLowerCase
var userNumeric
var specialCharSet = ['!','#','$','%','&','(',')'];
var upperCaseSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericSet = ['0','1','2','3','4','5','6','7','8','9'];

// EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener('click', writePassword);

// FUNCTION TO RETRIEVE USER INPUT AND VALIDATE DATA    
function generatePassword() {
    passwordLength = Number(prompt('How many characters should your password be? Choose a valid number between 8 and 128.'));     
        console.log('passwordLength',passwordLength);
        if (passwordLength < 8 || passwordLength > 128) {
            alert('Invalid password length.')
            return   
        }
        if (isNaN(passwordLength)) {
            alert('Entry not valid, please enter a number.')
            return
        }
    userSpecialChar = confirm('Click OK to include Special characters; Cancel will not include them.');
        console.log('userSpecialChar',userSpecialChar);
    userUpperCase = confirm('Click OK to include Uppercase characters; Cancel will not include them.');
        console.log('uesrUpperCase',userUpperCase);
    userLowerCase = confirm('Click OK to include Lowercase characters; Cancel will not include them.');
        console.log('userLowerCase',userLowerCase);
    userNumeric = confirm('Click OK to include Numeric characters; Cancel will not include them.');
        console.log('userNumeric', userNumeric);

        if (!userSpecialChar && !userLowerCase && !userNumeric && !userUpperCase){
            alert('No choice made, please make at least one selection.')
            return
        }    
    var newPassword = getChar();
    return newPassword;

}
// FUNCTION TO COMBINE USER DATA AND CHARACTER ARRAYS TO RETURN A UNIQUE PASSWORD
function getChar() {
    var passwordArray = [];
        console.log('userSpecialChar',userSpecialChar);
    
    if (userSpecialChar) {
        passwordArray = passwordArray.concat(specialCharSet);
    }
    if (userUpperCase) {
        passwordArray = passwordArray.concat(upperCaseSet);
    }
    if (userLowerCase) {
        passwordArray = passwordArray.concat(lowerCaseSet);
    }
    if (userNumeric) {
        passwordArray = passwordArray.concat(numericSet);
    }
        console.log('passwordArray',passwordArray);

passwordText = '';    
    for (var i = 0; i <= passwordLength; i++) {
    passwordText = passwordText + passwordArray[Math.floor(Math.random() * passwordArray.length)]
}
console.log('passwordText', passwordText);
return passwordText;

}