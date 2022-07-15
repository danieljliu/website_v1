import {BsFillPersonFill} from 'react-icons/bs';
import {AiOutlineCode} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {IoDocumentTextSharp, IoHome} from "react-icons/io5"
import NavBarIcon from "./NavBarIcon";
import ThemeIcon from "./ThemeIcon"
import {Link, animateScroll} from "react-scroll"
import Resume from "/public/Resume.pdf"

const NavBar = () => {
    const handleClick = () => {
        animateScroll.scrollToTop({duration: 500})
    }
    return (
        <div className="sticky top-0 flex justify-around
                  bg-gray-300 dark:bg-gray-900 shadow-lg z-10">

            <div onClick = {handleClick}><NavBarIcon icon={<IoHome size="28"/>} text="Go to Top"/></div>
            <div className={"flex flex-row space-x-28"}>
                <Link to="about" smooth="true" duration={500} offset={-80}><NavBarIcon icon={<BsFillPersonFill size="28"/>} text="About Me"/></Link>
                <Link to="projects" smooth="true" duration={500} offset={-80}><NavBarIcon icon={<AiOutlineCode size="28"/>} text="My Projects"/></Link>
                <Link to="contact" smooth="true" duration={500} offset={-80}><NavBarIcon icon={<MdEmail size="28"/>} text="Contact Me"/></Link>
                <a href = {Resume} target = "_blank" rel="noreferrer"><NavBarIcon icon={<IoDocumentTextSharp size="24"/>} text="My Resume"/></a>
            </div>
            <div><ThemeIcon/></div>
        </div>
    );
};

export default NavBar;
