const headerBlock = document.querySelector('.header-block')
const headerName = document.querySelector('.header-name')
const helloText = document.querySelector('.hello-text')
const anchorButtons = document.querySelectorAll('.anchor-button')
const сhangeButton = document.querySelector('.change-button')
const burgerMenu = document.querySelector('.burger-menu')


const textWelcomSection = document.querySelector('.text-welcome-section')
const canScrollLine = document.querySelector('.can-scroll-line')

const nameSection =document.querySelectorAll('.name-section')
const cards =document.querySelectorAll('.card')

const nameListSkills = document.querySelectorAll('.name-list-skills')
const listSkills =document.querySelectorAll('.skill-text')

const cardLinkContact =document.querySelectorAll('.card-link-contact')

const footerBottom =document.querySelector('.footer-bottom')





function setTimeout_classListAdd (elem, time) {
    const className = 'visible-' + elem.classList['0']
    setTimeout(() => {
        elem.classList.add(className)
    }, time)
}

function visibleRange (elem) {
    window.addEventListener('scroll', () => {
        const yPositionElements = elem.getBoundingClientRect().y
        const className = 'visible-' + elem.classList['0']

        if (yPositionElements < window.innerHeight) {
            elem.classList.add(className)
        }
        
    })
}

document.addEventListener('DOMContentLoaded', () => {
    window.onload = () => {
        setTimeout_classListAdd (headerBlock, 2000)
        setTimeout_classListAdd (helloText, 1500)


        const helloTextDisplay = setInterval(() => {
            helloText.style.display = 'none'
            clearInterval(helloTextDisplay)
        }, 2300)

        
        setTimeout_classListAdd (textWelcomSection, 2500)
        setTimeout_classListAdd (headerName, 3000)
        setTimeout_classListAdd (burgerMenu, 3000)
        anchorButtons.forEach((btn, i) => setTimeout_classListAdd (btn, 3500 + (i * 300)))
        setTimeout_classListAdd (сhangeButton, 4000) 
        setTimeout_classListAdd (canScrollLine, 4200)


        setTimeout(() => {
            nameSection.forEach(name => visibleRange(name))
            cards.forEach(card => visibleRange(card))
            nameListSkills.forEach(nameSkill => visibleRange(nameSkill))
            listSkills.forEach(skill => visibleRange(skill))  
            cardLinkContact.forEach(card => visibleRange(card))
            visibleRange(footerBottom)
        }, 2000);

    }

})




export { anchorButtons, burgerMenu, cardLinkContact }
