import './Title.css'

/* eslint-disable react/no-unescaped-entities */

const Title = () => {
  return (
    <section className={'titleSection hidden'}>
      <h1 className={'introductionHeader'}>Hi, I'm</h1>
      <h1 className={'nameHeader'}>Tatu Maunu.</h1>
      <h1 className={'introductionHeader'}>Software engineer</h1>
      <div className={'indicator'}></div>
    </section>
  )
}

export default Title