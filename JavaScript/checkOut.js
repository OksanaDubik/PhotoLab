//checkOut
/**
 * function myFunction:gallery, displays the active image;
 * function topFunction : button returns to top;
 * button menuBtn:changes the menu to a burger menu;
 */
let checkOutBtnTop = document.querySelector('.checkOut__btn-top');
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
function myFunction(imgs) {
    if (document.documentElement.clientWidth > 730) {
        let expandImg = document.getElementById("expandedImg");
        let imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "flex";
        expandImg.parentElement.scrollIntoView({block: "center", behavior: "smooth"});
        checkOutBtnTop.style.display = 'block';
        document.querySelector('.closebtn').style.display = 'block';
    }
}

checkOutBtnTop.addEventListener('click', topFunction)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
});


