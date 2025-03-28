import { pushProjects, buttonCloseTimerNotification, buttonNewTimer } from "./push-projects.js"

const formBlock = document.querySelector('.form-block')
const formTimer = document.querySelector('#formTime')
const submitTimer = document.querySelector('.button-submit-timer')

const timeViewBlock = document.querySelector('.time-view-block')
const buttonStopTimer = document.querySelector('.button-stop-timer')

const hours = document.querySelector('[data-js-hours]')
const minutes = document.querySelector('[data-js-minutes]')
const seconds = document.querySelector('[data-js-seconds]')

const pushTimer = document.querySelector('.push-timer')



function pushTimer_fun(ms) {
    setTimeout(() => {

        !(document.querySelector('.mini-project-timer').classList.contains('project-section-open'))
        ?pushProjects()
        :null
    }, ms)
}

function resetSettings (hours, minutes, seconds, intervalID, timeout) {
    hours = null
    minutes = null
    seconds = null

    clearInterval(intervalID)
    clearTimeout(timeout)


    document.querySelector('[data-js-hours]').value = ""
    document.querySelector('[data-js-minutes]').value = ""
    document.querySelector('[data-js-seconds]').value = ""

    buttonStopTimer.textContent = 'Stop'

    formBlock.classList.remove('timer-form-off')
    submitTimer.classList.remove('button-submit-timer-off')

    timeViewBlock.classList.remove('timer-view-on')
    buttonStopTimer.classList.remove('button-stop-timer-on')

}

function viewedInterval (hours, minutes, seconds, milliseconds, event) {

    // displaying the countdown 
    const intervalID = setInterval (() => {

        //timer -1
        if (hours > 0) {
            if (seconds == 0 && minutes == 0) {
                hours--
                minutes = 60
                seconds = 0
            } 
        }

        if (seconds == 0) {
            minutes--
            seconds = 60
        }
        
        seconds--

        let textTimeH = `${hours}`
        let textTimeM = `${minutes}`
        let textTimeS = `${seconds}`
        // timer viewed
        hours < 10
        ?textTimeH = `0${hours}`
        :textTimeH = `${hours}`
        minutes < 10
        ?textTimeM = `0${minutes}`
        :textTimeM = `${minutes}`
        seconds < 10
        ?textTimeS = `0${seconds}`
        :textTimeS = `${seconds}`

        return document.querySelector(".time-hours").textContent = textTimeH,
               document.querySelector(".time-minutes").textContent = textTimeM,
               document.querySelector(".time-seconds").textContent = textTimeS

    }, 1000)

    
    // end of timer
    const timeout = setTimeout(() => {
        clearInterval(intervalID)
        buttonStopTimer.textContent = 'New timer'
    }, milliseconds)

    
    // reset timer
    buttonStopTimer.addEventListener('click', () => {
        resetSettings(hours, minutes, seconds, intervalID, timeout)
    })
    buttonCloseTimerNotification.addEventListener('click', () => {
        resetSettings(hours, minutes, seconds, intervalID, timeout)
    })
    buttonNewTimer.addEventListener('click', () => {
        resetSettings(hours, minutes, seconds, intervalID, timeout)
    })

}

formTimer.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!hours.value && !minutes.value && !seconds.value) {
        hours.value = 0
        minutes.value = 7
        seconds.value = 7
    }
    const fullSecond = (Number(hours.value)*60*60 + Number(minutes.value)*60 + Number(seconds.value))


    // recalculating values
    if (fullSecond > 60 && fullSecond < 3600) {
        minutes.value = Math.floor( fullSecond/60 )
        seconds.value = fullSecond - 60*minutes.value 
    } else {
        hours.value = Math.floor(fullSecond/3600)

        if (hours.value > 23) {
            hours.value = 24
            minutes.value = 0
            seconds.value = 0
        } else {
            minutes.value = Math.floor( (fullSecond - 3600*hours.value)/60 )
            seconds.value = fullSecond - 3600*hours.value - 60*minutes.value 
        }
    }




    formBlock.classList.add('timer-form-off')
    submitTimer.classList.add('button-submit-timer-off')

    timeViewBlock.classList.add('timer-view-on')
    buttonStopTimer.classList.add('button-stop-timer-on')

    const h = Number(hours.value)
    const m = Number(minutes.value)
    const s = Number(seconds.value)
    let ms = (h*60*60 + m*60 + s) * 1000
    
    let textTimeH = `${h}`
    let textTimeM = `${m}`
    let textTimeS = `${s}`

    // timer viewed
    h < 10
    ?textTimeH = `0${h}`
    :textTimeH = `${h}`

    m < 10
    ?textTimeM = `0${m}`
    :textTimeM = `${m}`

    s < 10
    ?textTimeS = `0${s}`
    :textTimeS = `${s}`
    

    document.querySelector(".time-hours").textContent = `${textTimeH}`
    document.querySelector(".time-minutes").textContent = `${textTimeM}`
    document.querySelector(".time-seconds").textContent = `${textTimeS}`

    viewedInterval (h, m, s, ms, e)
    pushTimer_fun(ms)
})




