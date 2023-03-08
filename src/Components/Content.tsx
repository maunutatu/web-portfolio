import './Content.css'
import {Scroll} from "@react-three/drei";
import Title from "./Title";
import About from "./About";
import Skills from "./Skills";
import {useEffect, useState} from 'react'
import Projects from "./Projects";
import Other from "./Other";
import Contact from "./Contact";
import AnimationLogic from '../Utils/AnimationLogic'
import OpacityLogic from '../Utils/OpacityLogic'

interface ContentProps {
    animationRef: React.RefObject<any>
}

const Content = (props: ContentProps) => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
        AnimationLogic(props.animationRef)
        OpacityLogic()
    }, [loaded])

    return (
      <Scroll html>
          <div className={"content"}>
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