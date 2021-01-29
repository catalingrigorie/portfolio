import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className={classes.Container}>
            <div className={classes.Nav}>
                <div><Link className={classes.Name} to="/">Catalin</Link></div>
                <ul className={classes.List}>
                    <li>Github</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar