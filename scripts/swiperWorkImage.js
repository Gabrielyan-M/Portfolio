const imagesWorkContainer = document.querySelectorAll('[data-js-examples-work-images-container]')
const imageLeftBlock = document.querySelectorAll('[data-js-work-image-left]')
const scrollLine = document.querySelectorAll('[data-js-scroll-line-block]')


let isActiveArr = []

document.addEventListener('DOMContentLoaded', () => {
      for (let y = 0; y < imagesWorkContainer.length; y++) {
            isActiveArr = [...isActiveArr, false]
      }
})

const beforeAfterSlider = (x, i) => {
      let percent = Math.max(0, Math.min(x, imagesWorkContainer[i].getBoundingClientRect().width))
      scrollLine[i].style.left = `${percent}px`
      imageLeftBlock[i].style.width = `${percent}px`
}

imagesWorkContainer.forEach((container, index) => {
      container.addEventListener('mousemove', (e) => {
            if ( !isActiveArr[index] ) return
            let x = Math.max(0, e.clientX - container.getBoundingClientRect().left) 
            beforeAfterSlider(x, index)           
      });

      container.addEventListener('mouseleave', (e) => {
            isActiveArr[index] = false
      });

      container.addEventListener('touchmove', (e) => {
            e.preventDefault()
            isActiveArr[index] = true

            let i
            let x

            for ( i = 0; i < e.changedTouches.length; i++ ) {
                  x = Math.max(0, e.changedTouches[0].clientX - container.getBoundingClientRect().left)
            }
            
            beforeAfterSlider(x, index)
      });
});

scrollLine.forEach((line, index) => {

      line.addEventListener('mousedown', (e) => {
            isActiveArr[index] = true
      })
      
      line.addEventListener('mouseup', (e) => {
            isActiveArr[index] = false
      })

      line.addEventListener('touchstart', () => {
            isActiveArr[index] = true
      })

      line.addEventListener('touchend', () => {
            isActiveArr[index] = false
      })

      line.addEventListener('touchcansel', () => {
            isActiveArr[index] = false
      })
})
