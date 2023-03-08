import './Projects.css'
import Project from "./Project";
import BlogAppImg from '../Assets/BlogApp.png'
import KanbanBoardAppImg from '../Assets/KanbanBoardApp.png'
import PorfolioImg from '../Assets/Website.png'


const Projects = () => {
    return (
            <section>
                <div className={'hidden'}>
                  <h1 className={'projectsHeader'}>Projects:</h1>
                </div>
                <Project name={'Blog App'} image={BlogAppImg}
                         description={'A blog sharing platform. Users can share blogs and interact with blog recommendations of their peers. A single page application showcasing end-to-end Javascript-based web development'}
                         tech={'Javascript + React + Node + Express + MongoDB'} repositoryLink={'https://github.com/maunutatu/Blog_App'}/>
                <Project name={'Kanban Board App'} image={KanbanBoardAppImg} description={'A Kanban board -application, similar to likes of Trello and Microsoft Planner where users can create and use kanban boards. Kanban cards have different functionalities for following progress, schedule, attachments etc.'}
                         tech={'Scala + JavaFX'} repositoryLink={'https://github.com/maunutatu/kanban-board-app'}/>
                <Project name={'Web Portfolio'} image={PorfolioImg} description={'This website is to showcase my web development skills. Includes 3D model animations and responsive web design.'}
                         tech={'Typescript + React + Three.js'} repositoryLink={'https://github.com/maunutatu/web-portrfolio'} />
            </section>
    )
}

export default Projects