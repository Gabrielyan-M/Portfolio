import { anchorButtons } from './loadingDOM.js'
import { openMenu } from './burgerMenu.js'

const projectsSection = document.querySelector('.projects-section')
const skillsSection = document.querySelector('.skills-section')
const contactsSection = document.querySelector('.contacts-section')




anchorButtons.forEach((btn) => {

    
    
    btn.addEventListener('click', (e) => {
        const attributeValue = e.currentTarget.attributes['data-anchor-section'].value
    
        if (attributeValue === 'Projects') {            
            window.scroll ({
                top: projectsSection.getBoundingClientRect().y-10,
                behavior: 'smooth'
            })
        }

        if (attributeValue === 'Skills') {
            window.scroll ({
                top: skillsSection.getBoundingClientRect().y -10,
                behavior: 'smooth'
            })
        }

        if (attributeValue === 'Contacts') {
            window.scrollBy ({
                top: contactsSection.getBoundingClientRect().y - 10,
                behavior: 'smooth'
            })
        }

        
        openMenu()
    })
})