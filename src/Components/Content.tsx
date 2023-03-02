import {Scroll, useScroll} from "@react-three/drei";
import Title from "./Title";
import About from "./About";
import Skills from "./Skills";
import {useEffect, useState} from "react";
import {useFrame} from "@react-three/fiber";
import Projects from "./Projects";
import Other from "./Other";
import Contact from "./Contact";

interface ContentProps {
    animationRef: React.RefObject<any>
}

const Content = (props: ContentProps) => {

    const scroll = useScroll()
    const [opacityTitleSection, setOpacityTitleSection] = useState(1)
    const [opacityAboutSection, setOpacityAboutSection] = useState(1)
    const [opacitySkillsSection, setOpacitySkillsSection] = useState(1)
    const [opacityProjectsSection, setOpacityProjectsSection] = useState(1)
    const [opacityOtherSection, setOpacityOtherSection] = useState(1)
    const [opacityContactSection, setOpacityContactSection] = useState(1)

    /* useEffect(() => {
        props.animationRef.current.waveAnimation()
    }, []) */


    useFrame(() => {
        setOpacityTitleSection(1 - scroll.range(0, 1 / 9))
        setOpacityAboutSection(scroll.curve(1 / 13, 1 / 9))
        setOpacitySkillsSection(scroll.curve(2 / 10, 1 / 6))
        setOpacityProjectsSection(scroll.curve(3.5 / 20, 6 / 8))
        setOpacityOtherSection(scroll.curve(6 / 8, 1.5 / 6))
        setOpacityContactSection(scroll.curve(13.5 / 16 , 1.5 / 6))
    })

    return (
        <Scroll html>
            <div className={"content"}>
                <Title opacity={opacityTitleSection}/>
                <About opacity={opacityAboutSection}/>
                <Skills opacity={opacitySkillsSection}/>
                <Projects opacity={opacityProjectsSection}/>
                <Other opacity={opacityOtherSection}/>
                <Contact opacity={opacityContactSection}/>
            </div>
        </Scroll>
    )
}

export default Content