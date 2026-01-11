import { scrollToForm } from './scrollButtons.js'

window.addEventListener('load', () => {
      if (location.hash === '#formBlock' ) {
            scrollToForm ()
      }
})