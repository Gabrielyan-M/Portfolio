import { cardLinkContact } from './loadingDOM.js'

cardLinkContact.forEach(card => {
    card.addEventListener('click', () => {
        console.log(card.attributes);
        navigator.clipboard.writeText(card.textContent)
    })
    
})