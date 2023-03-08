


const AnimationLogic = (animationRef: React.RefObject<any>) => {
  const sectionForWaveAnimation = document.querySelector('.nameHeader')
  const sectionForTextingAnimation = document.querySelector('.aboutMeText')
  const sectionForKickingAnimation = document.querySelector('.otherText')
  const sectionForStandingAnimation = document.querySelector('.contactText')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.className == 'nameHeader') {
          animationRef.current.waveAnimation()
        } else if (entry.target.className == 'aboutMeText') {
          animationRef.current.textAnimation()
        } else if (entry.target.className == 'otherText') {
          animationRef.current.kickAnimation()
        } else if (entry.target.className == 'contactText') {
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
