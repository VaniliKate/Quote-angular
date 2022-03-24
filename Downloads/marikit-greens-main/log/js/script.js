const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

//Sign up validation and storing items with local storage
function store() {

    var name = document.getElementById('name');
    var pw = document.getElementById('password');
    var email = document.getElementById('email');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in name');

    } else if (pw.value.length == 0) {
        alert('Please fill in password');

    } else if (email.value.length == 0) {
        alert('Please fill in email');

    } else if (email.value.length == 0 && pw.value.length == 0) {
        alert('Please fill in email and password');

    } else if (pw.value.length > 24) {
        alert('Max of 24');

    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lowercase letter');

    } else {
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('email', email.value);
        alert('Your account has been created');
        window.location.replace(
          (window.location.pathname = "/ft-homepage/homepage.html")
        );
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('email2');
    var userPw = document.getElementById('password2');

    if (userName.value.length == 0) {
        alert('Please fill in email');

    } else if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
        window.location.replace(
          (window.location.pathname = "/ft-homepage/homepage.html")
        ); 
    }else{

        alert('Error on login');
        return
    }
}

//Prevent default
var form = document.getElementById("form");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);
document.getElementById("form").reset();

var form2 = document.getElementById("form2");

function handleForm(event) {
    event.preventDefault();
}

