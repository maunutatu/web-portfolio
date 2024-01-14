const OpacityLogic = (sections: NodeListOf<Element>): void => {
  const interSectionObserver: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  }, {
    threshold: 0.3
  })

  sections.forEach((section: Element) => interSectionObserver.observe(section))
}

export default OpacityLogic