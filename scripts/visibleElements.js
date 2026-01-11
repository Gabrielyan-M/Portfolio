window.onload = () => {
      const elements = document.querySelectorAll('[data-js-hidden-element]')
            
      const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.05,
      };
      
      const visbleElement = (entries, observer) => {
            entries.forEach(entry => {
                  if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                  }
            })
      }
      
      const observer = new IntersectionObserver( visbleElement, options )
      elements.forEach(elem => observer.observe(elem))
}
