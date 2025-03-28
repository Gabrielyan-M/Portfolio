export const buttonCloseTimerNotification = document.querySelector('.button-close-timer-notification')
export const buttonNewTimer = document.querySelector('.button-new-timer')

export function pushProjects () {
    document.querySelector('.notification-timer').classList.add('notification-active')
    
    buttonCloseTimerNotification.addEventListener('click', () => {
        document.querySelector('.notification-timer').classList.remove('notification-active')
    })
}

buttonNewTimer.addEventListener('click', () => {
    document.querySelector('.notification-timer').classList.remove('notification-active')

    document.querySelector('.mini-project-timer').classList.add('project-section-open')
    document.querySelector('body').style.overflow = 'hidden'
    
})
