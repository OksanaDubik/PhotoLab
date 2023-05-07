/**
 *
 * findCard:open the text of the product card and change the text of the button;
 */
//открываем текст карточки товара
let findCard = document.querySelector('.cards__block');
findCard.addEventListener('click', function (event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let elem = document.getElementById(id);

    //меняем текст кнопки
    elem.hidden = !elem.hidden;
    if (!elem.hidden) {
        console.dir(event.target)
        event.target.textContent = "Shorten"
    } else {
        event.target.textContent = "Read more"
    }
})


//footer email
function ValidateFooterEmail() {
    let footerBtnEmail = document.querySelector('.footer__btn');
    footerBtnEmail.addEventListener('click', function () {
        let emailText = document.querySelector('#footer-email')
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailText.value.match(mailFormat)) {
            emailText.value = ''
            return true;
        } else {
            emailText.value = ''
            emailText.focus();
            return false;
        }
    });

}

ValidateFooterEmail()

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
});

