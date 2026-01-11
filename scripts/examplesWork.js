const filterButtons = document.querySelectorAll('[data-js-filter-button]')
const examplesWorkImagesBlocks = document.querySelectorAll('[data-js-examples-work-images-block]')

filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
            e.preventDefault()

            
            changeBlock (button.getAttribute('data-js-filter-button'))
      })
})


function changeBlock (blockID) {

      let windowY = window.pageYOffset

      window.location.hash = blockID
      window.scrollTo({top: windowY})

      examplesWorkImagesBlocks.forEach(block => {
            "#"+block.getAttribute('id') === location.hash
            ?block.classList.add('active')
            :block.classList.remove('active')
      })

      filterButtons.forEach(button => {
            "#"+button.getAttribute('data-js-filter-button') === location.hash
            ?button.classList.add('active')
            :button.classList.remove('active')
      })
}