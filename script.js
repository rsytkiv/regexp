const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const firstWarn = document.getElementById('firstWarn');
const lastWarn = document.getElementById('lastWarn');
const emailWarn = document.getElementById('emailWarn');
const passWarn = document.getElementById('passWarn');
const signButton = document.getElementById('signBut');
const trans = document.querySelector('.trans');
const popupWind = document.querySelector('.popup');
const checkbox = document.getElementById('check');

let namesRegExp = /^[a-zA-Z]{2,20}$/;
let emailRegExp = /^([\w.-]+@([\w-]+\.)+[\w-]{2,4})?$/;
let passRegExp = /^[a-zA-Z0-9]{8,15}$/;

let firstTotal;
let secondTotal;
let thirdTotal;
let fourthTotal;

signButton.disabled = true;

firstName.addEventListener('input', function(event) {
    let testFirst = namesRegExp.test(firstName.value);
    if (!testFirst) {
        document.getElementById('firstWarn').style.visibility = "visible";
        firstTotal = 0;
    }
    else{
        document.getElementById('firstWarn').style.visibility = "hidden";
        firstTotal = 1;
    }
    checkInputs();
});

lastName.addEventListener('input', function(event) {
    let testFirst = namesRegExp.test(lastName.value);
    if (!testFirst) {
        document.getElementById('lastWarn').style.visibility = "visible";
        secondTotal = 0;
    }
    else{
        document.getElementById('lastWarn').style.visibility = "hidden";
        secondTotal = 1;
    }
    checkInputs();
});

email.addEventListener('input', function(event) {
    let testFirst = emailRegExp.test(email.value);
    if (!testFirst) {
        document.getElementById('emailWarn').style.visibility = "visible";
        thirdTotal = 0;
    }
    else{
        document.getElementById('emailWarn').style.visibility = "hidden";
        thirdTotal = 1;
    }
    checkInputs();
});
password.addEventListener('input', function(event) {
    let testFirst = passRegExp.test(password.value);
    if (!testFirst) {
        document.getElementById('passWarn').style.visibility = "visible";
        fourthTotal = 0;
    }
    else{
        document.getElementById('passWarn').style.visibility = "hidden";
        fourthTotal = 1;
    }
    checkInputs();
});

function checkInputs(){

    if (firstTotal == 1 && secondTotal == 1 && thirdTotal == 1 && fourthTotal == 1 && checkbox.checked == true){
        signButton.disabled = false;
    } else {
        signButton.disabled = true;
    }
}

function popup(){
    trans.style.display = "inline-block";
    popupWind.style.display = "inline-block";
}
function startExp(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    trans.style.display = "none";
    popupWind.style.display = "none";
    checkbox.checked = false;
}
