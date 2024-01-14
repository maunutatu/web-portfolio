import OpacityLogic from './OpacityLogic'
import AnimationLogic from './AnimationLogic'


const DOMObserver = (animationRef: React.RefObject<any>): void => {
  const mutationObserver: MutationObserver = new MutationObserver((entries: MutationRecord[], observer: MutationObserver): void => {
    const hiddenSections: NodeListOf<Element> = document.querySelectorAll('.hidden')
    AnimationLogic(animationRef)
    OpacityLogic(hiddenSections)
    observer.disconnect()
  })

  mutationObserver.observe(document.body, { subtree: true, attributes: true })
}

export default DOMObserver