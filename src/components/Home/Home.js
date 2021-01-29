import ProjectCard from '../ProjectCard/ProjectCard';
import Projects from "../../content/projects";
import classes from './Home.module.css';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className={classes.Projects}>
                {Projects.map(el => {
                    return <ProjectCard 
                        key={el.name}
                        name={el.name}
                        technologiesTags={el.tags}
                        image={el.image}
                        description={el.description}
                        githubLink={el.githubLink}
                        liveDemoLink={el.liveDemoLink}
                    />
                })}
            </div>
        </div>
    )
}

export default Home