const scrollButtom = document.querySelectorAll('[data-js-scroll-button]')
const welcomeBlock = document.querySelector('[data-js-welcome-block]')



scrollButtom.forEach(button => {
      button.addEventListener('click', (e) => {

            switch (button.getAttribute('data-js-scroll-button')) {
                  case 'bottom':
                        window.scrollTo({ top: welcomeBlock.clientHeight, behavior: 'smooth' })
                        break
                  case 'top':
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        break
                  case 'form':
                        
                        scrollToForm ()
                        // window.scrollTo({ top: formBlock.getBoundingClientRect().y + formBlock.clientHeight/2 - window.innerHeight/2, behavior: 'smooth' })
                        break

                  default:
                        return
            } 


      })
})


function scrollToForm () {
      if (document.querySelector('#formBlock')) {
            if ( document.querySelector('[data-js-navigation-menu]').classList.contains('active') ) {

                  document.querySelector('[data-js-body]').classList.remove('active')
                  document.querySelector('[data-js-navigation-menu]').classList.remove('active')
                  document.querySelector('[data-js-burger-button]').classList.remove('active')
                  
                  document.querySelector('#formBlock').scrollIntoView({block: 'center', behavior: 'smooth'})

            } else {
                  document.querySelector('#formBlock').scrollIntoView({block: 'center', behavior: 'smooth'})
            }
      }     
}

export { scrollToForm }
