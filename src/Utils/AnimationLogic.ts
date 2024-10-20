import { AnimationAction, LoopRepeat } from 'three'
import { RefObject } from 'react'
import { TAnimationControls } from '../App'

const AnimationLogic = (animationRef: RefObject<TAnimationControls>): void => {
  const sectionForWaveAnimation: Element | null = document.querySelector('.nameHeader')
  const sectionForTextingAnimation: Element | null = document.querySelector('.aboutMeText')
  const sectionForKickingAnimation: Element | null = document.querySelector('.otherText')
  const sectionForStandingAnimation: Element | null = document.querySelector('.contactText')

  // Referencing the animation directly causes problems. Have to use this string ref to work around it.
  const getCurrentAnimation = (): AnimationAction => {
    const { currentAnimationRef, standAnimation, waveAnimation, textAnimation, kickAnimation } = animationRef.current!
    const currentAnimation = currentAnimationRef.current
    switch (currentAnimation) {
    case 'wave':
      return waveAnimation
    case 'text':
      return textAnimation
    case 'kick':
      return kickAnimation
    default:
      return standAnimation
    }
  }

  const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        const { currentAnimationRef, standAnimation, waveAnimation, textAnimation, kickAnimation, mixer } = animationRef.current!
        switch (entry.target.className) {
        case 'nameHeader':
          waveAnimation.reset().crossFadeFrom(getCurrentAnimation(), 0.5, true).play()
          currentAnimationRef.current = 'wave'
          break
        case 'aboutMeText':
          textAnimation.reset().crossFadeFrom(getCurrentAnimation(), 0.5, true).play()
          currentAnimationRef.current = 'text'
          break
        case 'otherText':
          if(currentAnimationRef.current === 'kick') return
          kickAnimation.reset().crossFadeFrom(getCurrentAnimation(), 0.5, true).setLoop(LoopRepeat, 2).play()
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
