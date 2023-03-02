import './Title.css'

interface TitleProps {
    opacity: number
}

const Title = (props: TitleProps) => {
    return (
        <section className={'titleSection'} style={{opacity: props.opacity}}>
            <h2 className={'introductionHeader'}>Hi, I'm</h2>
            <h1 className={'nameHeader'}>Tatu Maunu.</h1>
            <h1 className={'developerHeader'}>Software developer</h1>
            <div className={'indicator'}></div>
        </section>
    )
}

export default Title