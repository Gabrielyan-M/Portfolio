const changeThemeButton = document.querySelector('.change-theme-button')
const themeSVG = document.querySelectorAll('.themeSVG')

changeThemeButton.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('lightstyle')

    document.querySelector('.sun-svg').classList.toggle('theme-active')
    document.querySelector('.moon-svg').classList.toggle('theme-active')
})