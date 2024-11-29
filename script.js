const alphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const specialChars = "!@#$%^&*(){},.;'/?:";
let charSet = alphaNumeric;

function createPassword(length,charSet,quantity) {
    let text = "";
    let pwdArray = [];
    counter = 0;
    while (counter < quantity) {
        let pwd = "";
        for (i=0; i < length; i++) {
            pwd += charSet.charAt(Math.ceil(Math.random() * charSet.length));
        }
        counter++;
        text += pwd + "<br>";
        document.getElementById("passwords").innerHTML = text;
        pwdArray.push(pwd);
    }
    console.log(pwdArray);
}

function resetBtn() {
    location.reload();
}

function generateBtn() {
    let quantity = document.getElementById("quantity").value;
    let pwdLength = document.getElementById("pwdLength").value;
    let special = document.getElementById("special").checked;
    if (special === true) {
        charSet = alphaNumeric + specialChars;
    }
    if (isNaN(pwdLength)) {
        alert("'Password length' must be a number.")
    }
    if (isNaN(quantity)) {
        alert("'Number of passwords to generate' must be a number.")
    }
    createPassword(pwdLength,charSet,quantity);
}