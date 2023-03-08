import './Title.css'

const Title = () => {
    return (
        <section className={'titleSection hidden'}>
            <h2 className={'introductionHeader'}>Hi, I'm</h2>
            <h1 className={'nameHeader'}>Tatu Maunu.</h1>
            <h1 className={'developerHeader'}>Software developer</h1>
            <div className={'indicator'}></div>
        </section>
    )
}

export default Title