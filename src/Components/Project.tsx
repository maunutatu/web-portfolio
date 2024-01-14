import './Project.css'

interface ProjectProps {
  name: string,
  image: string,
  description: string,
  tech: string
  repositoryLink: string
}

const Project = (props: ProjectProps) => {
  return (
    <div className={'project hidden'}>
      <h2 className={'projectHeader'}>{props.name}</h2>
      <img className={'projectImage'} src={props.image} alt={props.name + ' image'}/>
      <p className={'projectDescription'}>{props.description}</p>
      <p className={'projectDescription'}>Tech: {props.tech}</p>
      <a className={'projectLink'} href={props.repositoryLink} target="_blank" rel="noopener noreferrer">View in Github
        🧐</a>
    </div>
  )
}

export default Project