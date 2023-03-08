

const OpacityLogic = () => {
  const hiddenSections = document.querySelectorAll('.hidden')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  }, {
    threshold: 0.3
  })

  hiddenSections.forEach((section) => observer.observe(section))
}

export default OpacityLogic