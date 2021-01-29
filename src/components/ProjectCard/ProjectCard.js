import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
    return (
        <div className={classes.Card}>
            <div>
                <img className={classes.ProjectImage} alt='projectImg' src={props.image} />
            </div>
            <div className={classes.CardContent}>
                <h2 className={classes.ProjectName}>{props.name}</h2>
                <div>
                    {props.technologiesTags.map(el => <span key={el} className={classes.Tag}>{el.toUpperCase()}</span>)}
                </div>
                <p className={classes.Description}>{props.description}</p>
                <div className={classes.Buttons}>
                    <a className={classes.buttonPrimary} target="blank" href={props.liveDemoLink}>Live Demo</a>
                    <a className={classes.buttonSecondary} target="blank" href={props.githubLink}>Source</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard