//form
//email
function ValidateEmail() {
    let forEmail = document.querySelector(".forEmail")
    let emailText = document.form1.email
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (forEmail.classList.contains("invalid")) {
        forEmail.classList.remove("invalid")
        document.form1.email.focus();
    }
    if (emailText.value.match(mailFormat)) {

        return true;
    } else {

        forEmail.innerText = "You have entered an invalid email address!";
        forEmail.classList.add("invalid");
        document.form1.email.focus();
        return false;
    }
}

//phone
function allNumericPlusMinus() {
    let formTel = document.querySelector('.forPhone')
    let inputTel = document.form1.phone
    let numbers = /^[-+]?[0-9]+$/;
    if (formTel.classList.contains("invalid")) {
        formTel.classList.remove("invalid")
        document.form1.phone.focus();
    }
    if (inputTel.value.match(numbers) && inputTel.value.length >= 6) {
        return true;
    } else {
        formTel.innerText = 'Please enter the correct format: at least 6 digits';
        formTel.classList.add('invalid');
        document.form1.phone.focus();
        return false;
    }
}

//name
// If the length of the element's string is 0 then display helper message
function required() {
    let formName = document.querySelector('.formName')
    let inputName = document.form1.firstname;
    if (formName.classList.contains("invalid")) {
        formName.classList.remove("invalid")
        document.form1.firstname.focus();
    }
    if (inputName.value.length === 0) {
        formName.innerText = "Your name";
        formName.classList.add('invalid');
        return false;
    }
    return true;
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', ValidateEmail);
btn.addEventListener('click', allNumericPlusMinus);
btn.addEventListener('click', required);


const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
});
