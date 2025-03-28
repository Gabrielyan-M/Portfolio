const miniProject_section = document.querySelectorAll('.mini-project-section')
const miniCards = document.querySelectorAll('.mini-card')





// close buttons
const closeProjectButton = document.querySelectorAll('.close-project-button')

miniCards.forEach(card => {
    card.addEventListener('click', (eCard) => {
        
        miniProject_section.forEach(project => {
            if (eCard.target.getAttribute('data-name-project') === project.getAttribute('data-project')) {
                project.classList.add('project-section-open')
                document.querySelector('body').style.overflow = 'hidden'
            }
        })

    })
})





closeProjectButton.forEach(closeButton => {
    closeButton.addEventListener('click', (eCard) => {

        miniProject_section.forEach(project => {
            project.classList.remove('project-section-open')
            document.querySelector('body').style.overflow = 'unset'
        })
        
    })
})