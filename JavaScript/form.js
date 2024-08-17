//form verification

let btn = document.querySelector('.btn')
let emailText = document.form1.email
let forEmail = document.querySelector(".forEmail")

let inputTel = document.form1.phone
let formTel = document.querySelector('.forPhone')

let inputName = document.form1.firstname;
let formName = document.querySelector('.formName')

function checkMail() {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (forEmail.classList.contains("invalid")) {
        forEmail.classList.remove("invalid")
        document.form1.email.focus();
    }
    if (emailText.value.match(mailFormat)) {
        forEmail.classList.remove("invalid")
    } else {
        forEmail.innerText = "You have entered an invalid email address!";
        forEmail.classList.add("invalid");
        document.form1.email.focus();
    }
}

function checkNumbers() {
    let numbers = /^[-+]?[0-9]+$/;
    if (formTel.classList.contains("invalid")) {
        formTel.classList.remove("invalid")
        document.form1.phone.focus();
    }
    if (inputTel.value.match(numbers) && inputTel.value.length >= 6) {
        formTel.classList.remove("invalid")
    } else {
        formTel.innerText = 'Please enter the correct format: at least 6 digits';
        formTel.classList.add('invalid');
        document.form1.phone.focus();
    }
}

function checkName() {
    if (formName.classList.contains("invalid")) {
        formName.classList.remove("invalid")
        document.form1.firstname.focus();
    }
    if (inputName.value.length === 0) {
        formName.innerText = "Your name";
        formName.classList.add('invalid');
    }
}

btn.addEventListener('click', function () {
    checkMail()
    checkNumbers()
    checkName()
})


function submitForm() {
    let form = document.forms.form1
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        let getInvalid = document.querySelectorAll(".invalid")
        if (getInvalid.length < 1) {
            emailText.value = ''
            inputTel.value = ''
            inputName.value = ''
        }
    })
}

submitForm()

//activation action menu
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
});
