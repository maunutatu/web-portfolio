import './Contact.css'
import LinkedInLogo from '../Assets/linkedinlogo.png'


const Contact = () => {
    return (
        <section className={'hidden'}>
            <h2 className={'sectionHeader'}>Contact</h2>
            <div className={'contactBox'}>
                <p className={'contactText'}>Got interested? Feel free to contact me 🤙</p>
                <br/>
                <p className={'contactText'}>📲 </p>
                <p className={'contactText'}>+358452700808</p>
                <br/>
                <p className={'contactText'}>📩 </p>
                <p className={'contactText'}> tatu.maunu@aalto.fi</p>
                <br/>
                <a className={'logoLink'} href={'https://www.linkedin.com/in/tatu-maunu-250652219/'} target="_blank" rel="noopener noreferrer">
                    <img style={{width: '40px'}} src={LinkedInLogo} alt={'linkedinLogo'}/>
                </a>
            </div>
        </section>
    )
}

export default Contact