const AnimationLogic = (animationRef: React.RefObject<any>): void => {
  const sectionForWaveAnimation: Element | null = document.querySelector('.nameHeader')
  const sectionForTextingAnimation: Element | null = document.querySelector('.aboutMeText')
  const sectionForKickingAnimation: Element | null = document.querySelector('.otherText')
  const sectionForStandingAnimation: Element | null = document.querySelector('.contactText')

  const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        if (entry.target.className === 'nameHeader') {
          animationRef.current.waveAnimation()
        } else if (entry.target.className === 'aboutMeText') {
          animationRef.current.textAnimation()
        } else if (entry.target.className === 'otherText') {
          animationRef.current.kickAnimation()
        } else if (entry.target.className === 'contactText') {
          animationRef.current.standAnimation()
        }
        observer.unobserve(entry.target)
      }
    })
  })

  if (sectionForWaveAnimation) observer.observe(sectionForWaveAnimation)
  if (sectionForTextingAnimation) observer.observe(sectionForTextingAnimation)
  if (sectionForKickingAnimation) observer.observe(sectionForKickingAnimation)
  if (sectionForStandingAnimation) observer.observe(sectionForStandingAnimation)
}

export default AnimationLogic
