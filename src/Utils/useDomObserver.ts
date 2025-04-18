import OpacityLogic from './OpacityLogic'
import AnimationLogic from './AnimationLogic'
import { TAnimationControls } from '../App'
import { RefObject, useEffect } from 'react'

const useDOMObserver = (animationRef: RefObject<TAnimationControls>): void => {
  useEffect(() => {
    const mutationObserver: MutationObserver = new MutationObserver(
      (_entries: MutationRecord[], observer: MutationObserver): void => {
        const hiddenSections: NodeListOf<Element> =
          document.querySelectorAll('.hidden')
        AnimationLogic(animationRef)
        OpacityLogic(hiddenSections)
        observer.disconnect()
      }
    )

    mutationObserver.observe(document.body, {
      subtree: true,
      attributes: true,
    })
  }, [])
}

export default useDOMObserver
