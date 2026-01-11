const arrow = document.querySelectorAll('[data-js-slide-arrow]')
const imagesBlock = document.querySelector('[data-js-images-block]')
const imagesContainer = document.querySelector('[data-js-images-container]')
const imageIndex = document.querySelectorAll('.image-index-id')


let i = 0

arrow.forEach(arrow => {
      arrow.addEventListener('click', () => {
            if (arrow.getAttribute('data-js-slide-arrow') === 'right') {
                  indexUp ()
                  console.log(arrow);
                  
            }
            if (arrow.getAttribute('data-js-slide-arrow') === 'left') {
                  indexDoun ()
                  console.log(arrow);
                  
            }
      })
})

function indexUp () {
      imagesContainer.children.length - 1 <= i 
      ?i = 0
      :i++
      
      slideOn()
}

function indexDoun () {
      i > 0
      ?i = i - 1
      :i = imagesContainer.children.length - 1

      slideOn()
}

function slideOn() {
      imagesContainer.style.transform = `translateX(-${i * 100}%)`;
      

      imageIndex.forEach((circle, index) => {
            if (i === index) {
                  circle.classList.add('active')
            } else {
                  circle.classList.remove('active')
            }
      })

}



// swipe touth
let startX = 0
let currentX = 0
let isDreagging = false
const threshold = 50

imagesBlock.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX      
})
imagesBlock.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX      
})
imagesBlock.addEventListener('touchend', (e) => {
      const diff = startX - currentX
      
      if (diff > threshold) {
            indexUp ()
      } else if (diff < -threshold) {
            indexDoun()
      }
})

