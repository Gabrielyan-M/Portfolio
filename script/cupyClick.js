import { cardLinkContact } from './loadingDOM.js'

const notificationCopied = document.querySelector('.lnik-copied-block')

cardLinkContact.forEach(card => {
    card.addEventListener('click', () => {
        navigator.clipboard.writeText(card.textContent)

        notificationCopied.classList.add('lnik-copied')
        setTimeout(() => {
            notificationCopied.classList.remove('lnik-copied')
        }, 2000)
    })
    
})