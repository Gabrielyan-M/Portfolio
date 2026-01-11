const burgerButton = document.querySelectorAll('[data-js-burger-button]')
const navigationMenu = document.querySelectorAll('[data-js-navigation-menu]')
const body = document.querySelector('[data-js-body]')



// button
burgerButton.forEach((button) => {
      button.addEventListener('click', () => {
            if ( button.getAttribute('data-js-burger-button') === "header" ) {
                  navMenu (button.getAttribute('data-js-burger-button'))
                  button.classList.toggle('active')
                  body.classList.toggle('active')
            } 

            if ( button.getAttribute('data-js-burger-button') === "main" ) {
                  navMenu (button.getAttribute('data-js-burger-button'))
                  button.classList.toggle('active')
            } 


      })
})

function navMenu (data) {
      navigationMenu.forEach(menu => {
            if (menu.getAttribute('data-js-navigation-menu') === data) {
                  menu.classList.toggle('active')
            }
      })
}

// menu
navigationMenu.forEach(menu => {
      menu.addEventListener('click', (e) => {
           if ( e.target.getAttribute('href') ) {
                  menu.classList.remove('active')
                  burgerButton.forEach(button => button.classList.remove('active'))
                  body.classList.remove('active')
            } else {
                  return null
            }
            
      })
})

// window resize (close nav. menu)
window.addEventListener('resize', (e) => {
      if (e.target.innerWidth > 1000 ) {
            burgerButton.forEach(elem => {
                  elem.classList.remove('active')
            })

            navigationMenu.forEach(elem => {
                  elem.classList.remove('active')
            })

            body.classList.remove('active')
      }
})

// resize welcome block
function visibleHiddenBurgerButton () {
      if (document.querySelector('.navigation-menu-main')) {
            if ( window.pageYOffset > window.innerHeight ) {
                  document.querySelector('.navigation-menu-main').classList.add('visible')
            }
            if (window.pageYOffset < window.innerHeight - 10) {
                  if ( document.querySelector('.navigation-menu-main').getAttribute('class') ) {
                        document.querySelector('.navigation-menu-main').classList.remove('visible')
                  }
            }
      }
}

export { visibleHiddenBurgerButton }