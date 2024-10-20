import './Content.css'
import { Scroll } from '@react-three/drei'
import Title from './Title'
import About from './About'
import Skills from './Skills'
import { RefObject } from 'react'
import Projects from './Projects'
import Other from './Other'
import Contact from './Contact'
import { TAnimationControls } from '../App'
import useDOMObserver from '../Utils/useDomObserver'
import { IUseCalculatePagesReturn } from '../Utils/useCalculateLayout'

interface ContentProps {
  contentCallback: IUseCalculatePagesReturn['calculatePages'],
  animationRef: RefObject<TAnimationControls>
}

const Content = (props: ContentProps) => {
  useDOMObserver(props.animationRef)

  return (
    <Scroll html>
      <div ref={props.contentCallback} className={'content'}>
        <Title/>
        <About/>
        <Skills/>
        <Projects/>
        <Other/>
        <Contact/>
      </div>
    </Scroll>
  )
}

export default Content