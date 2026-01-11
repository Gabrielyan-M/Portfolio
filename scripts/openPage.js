const cardServise = document.querySelectorAll('[data-js-card-servises]')

cardServise.forEach(card => (
      card.addEventListener('click', () => {
            const cardID = card.getAttribute('data-js-card-servises')

            if (cardID) {
                  openPage (cardID)
            }
      }) 
))

function openPage (cardID) {

      let pageLink = null

      switch (cardID) {
            case '001':
                  pageLink = './service-pages/dryCleaning.html'
                  break

            case '002':
                  pageLink = './service-pages/noiseInsulation.html'
                  break

            case '003':
                  pageLink = './service-pages/motorWashing.html'
                  break

            case '004':
                  pageLink = './service-pages/ozonation.html'
                  break

            case '005':
                  pageLink = './service-pages/headlightRestoration.html'
                  break

            case '006':
                  pageLink = './service-pages/antiRain.html'
                  break
                  
            case '007':
                  pageLink = './service-pages/polishing.html'
                  break

            case '008':
                  pageLink = './service-pages/tinting.html'
                  break

            case 'mainForm':
                  pageLink = '../index.html#formBlock'
                  break


            default:
                  return
      }

      window.location.assign(pageLink)




}