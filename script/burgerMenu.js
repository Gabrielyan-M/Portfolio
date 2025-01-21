import { burgerMenu } from "./loadingDOM.js";


const burgerLines = document.querySelectorAll('.burger-line')
const headerMenu = document.querySelector('.header-end')

function openMenu () {
    headerMenu.classList.toggle('menuActive')
    burgerLines[0].classList.toggle('burger-line-rotate45')
    burgerLines[1].classList.toggle('burger-line-off')
    burgerLines[2].classList.toggle('burger-line-rotate-45')
}

burgerMenu.addEventListener('click', () => {
    openMenu ()
})

export { openMenu }