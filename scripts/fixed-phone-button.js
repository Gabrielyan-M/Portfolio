const fixedPhoneButton = document.querySelector('[data-js-fixed-phone]')
const equipmentLine = document.querySelector('[data-js-equipment-line-top]')

function fixedPhone () {

      if (fixedPhoneButton && equipmentLine) {
           
            if ( window.innerWidth < 700 ) {
                  if ( ( equipmentLine.getBoundingClientRect().top - window.innerHeight + 30 ) < 0 )  {
                        fixedPhoneButton.style.display = "none"
                  } else {
                        fixedPhoneButton.style.display = "flex"
                  }
            } else {
                  fixedPhoneButton.style.display = "none"
            }
      }
}

export { fixedPhone }