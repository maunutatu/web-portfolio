import { LoopRepeat } from 'three'

const AnimationLogic = (animationRef: React.RefObject<any>): void => {
  const sectionForWaveAnimation: Element | null = document.querySelector('.nameHeader')
  const sectionForTextingAnimation: Element | null = document.querySelector('.aboutMeText')
  const sectionForKickingAnimation: Element | null = document.querySelector('.otherText')
  const sectionForStandingAnimation: Element | null = document.querySelector('.contactText')

  const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        const { currentAnimationRef, standAnimation, waveAnimation, textAnimation, kickAnimation, mixer } = animationRef.current
        const currentAnimation = currentAnimationRef.current
        switch (entry.target.className) {
        case 'nameHeader':
          waveAnimation.reset().crossFadeFrom(currentAnimation === 'stand' ? standAnimation : textAnimation, 0.5, true).play()
          currentAnimationRef.current = 'wave'
          break
        case 'aboutMeText':
          textAnimation.reset().crossFadeFrom(currentAnimation === 'wave' ? waveAnimation : standAnimation, 0.5, true).play()
          currentAnimationRef.current = 'text'
          break
        case 'otherText':
          if(currentAnimation === 'kick') return
          kickAnimation.reset().crossFadeFrom(currentAnimation === 'text' ? textAnimation : standAnimation, 0.5, true).setLoop(LoopRepeat, 2).play()
          currentAnimationRef.current = 'kick'
          mixer.addEventListener('finished', () => {
            standAnimation.reset().play()
            currentAnimationRef.current = 'stand'
          })
          break
        }
      }
    })
  })

  if (sectionForWaveAnimation) observer.observe(sectionForWaveAnimation)
  if (sectionForTextingAnimation) observer.observe(sectionForTextingAnimation)
  if (sectionForKickingAnimation) observer.observe(sectionForKickingAnimation)
  if (sectionForStandingAnimation) observer.observe(sectionForStandingAnimation)
}

export default AnimationLogic
