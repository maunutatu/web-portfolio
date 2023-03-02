import './Skills.css'


interface SkillsProps {
    opacity: number
}

const Skills = (props: SkillsProps) => {
    return (
        <section style={{opacity: props.opacity}}>
            <h1 className={'skillsHeader'}>Skills:</h1>
            <div className={'skillSections'}>
                <div className={'skillSection'}>
                    <h2 className={'skillHeader'}>📲 Frontend 👨‍💻</h2>
                    <li>
                        Javascript
                    </li>
                    <li>
                        Typescript
                    </li>
                    <li>
                        ReactJS
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Three.js
                    </li>
                </div>
                <div className={'skillSection'}>
                    <h2 className={'skillHeader'}>💾 Backend ⚒️</h2>
                    <li>
                        Javascript
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Scala
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        Apache Spark
                    </li>
                </div>
            </div>
        </section>
    )
}

export default Skills