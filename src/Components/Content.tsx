import './Content.css'
import { Scroll } from '@react-three/drei'
import Title from './Title'
import About from './About'
import Skills from './Skills'
import { useEffect } from 'react'
import Projects from './Projects'
import Other from './Other'
import Contact from './Contact'
import DOMObserver from '../Utils/DOMObserver'

interface ContentProps {
  animationRef: React.RefObject<any>
}

const Content = (props: ContentProps) => {

  useEffect((): void => {
    DOMObserver(props.animationRef)
  }, [])

  return (
    <Scroll html>
      <div className={'content'}>
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