import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
function Navbar (){
    return(
        <nav>
            <div className="links">
                <ScrollLink >Home</ScrollLink>
                <ScrollLink smooth={true} to="about-me">About-me</ScrollLink>
                <ScrollLink to="projects" smooth={true}>Projects</ScrollLink>
            </div>
            <ScrollLink smooth={true} to='contact-me' className='contact_me'>Contact-me</ScrollLink>
        </nav>
    )
}

export default Navbar;