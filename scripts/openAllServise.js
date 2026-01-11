const allServiseButton = document.querySelector('[data-js-all-servise-button]')
const cardsServiseBlock = document.querySelector('[data-js-cards-servise-block]')

let windowY = window.pageYOffset

allServiseButton.addEventListener('click', openListServise )

function openListServise(e) {
      if (window.innerHeight <= 740) {

            
            let h = cardsServiseBlock.children[0].getBoundingClientRect().height*3 + 40
            
            e.target.innerText === 'Все услуги'
            ?e.target.innerText = 'Скрыть список'
            :e.target.innerText = 'Все услуги'

            if ( cardsServiseBlock.clientHeight !== cardsServiseBlock.scrollHeight ) {                  
                  cardsServiseBlock.style.height = `${cardsServiseBlock.scrollHeight}px`                    
            } else {
                  cardsServiseBlock.style.height = `${h}px` 
                  console.log(windowY);
                  
                  window.scrollTo({ top: windowY, behavior: 'instant' })
            }

            windowY = window.pageYOffset

      }
}