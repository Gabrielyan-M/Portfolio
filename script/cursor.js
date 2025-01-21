const cursor = document.querySelector('.cursor')
const cursorHover = document.querySelectorAll('.cursorOff')

document.addEventListener('pointermove', (e) => {

    console.log(e.pointerType)
    
    if (e.pointerType !== "touch") {
        cursor.style.display = 'block'
        const posX = e.clientX
        const posY = e.clientY

        cursor.style.left = `${posX}px`
        cursor.style.top = `${posY}px`
    } else {
        cursor.style.display = 'none'
    }

})

cursorHover.forEach(btn => {
    btn.addEventListener('pointerenter', () => {
        cursor.classList.add('cursor-active')
    })
})

cursorHover.forEach(btn => {
    btn.addEventListener('pointerleave', () => {
        cursor.classList.remove('cursor-active')
    })
})