import './Other.css'

interface OtherProps {
    opacity: number
}

const Other = (props: OtherProps) => {
    return (
            <section style={{opacity: props.opacity}}>
                <h2 className={'otherHeader'}>What else do I do?</h2>
                <p className={'otherText'}>In addition to studying and coding, I compete in kickboxing at the highest level.
                    I won bronze in the 2022 European Championships and am preparing for the 2023 European Olympic Games.
                    Sports has taught me that devoting to a long-term goal means rigorous work to accomplish the premeditated success.
                    Working under great pressure and in a collectively dedicated environment has developed me as a person and sharpened my social and mental abilities.</p>

                <p className={'otherText'}>Other interests include reading and podcasts, especially about technology and economics.</p>
            </section>
    )
}

export default Other