import NavBarIcon from "./NavBarIcon";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

export default function Contact() {
    return (
        <div className={"flex flex-col items-center justify-center dark:text-gray-300"}>
            <div className="text-center text-5xl text-gray-500 dark:text-gray-300 h-20">Contact Me</div>
            <div class={"h-10"}>
                Feel free to reach out to me using any of the platforms below!
            </div>
            <div className = "justify-center flex flex-row space-x-28" >
                <a href = "mailto:djl284@scarletmail.rutgers.edu" target= "_blank"><NavBarIcon icon={<AiOutlineMail size="28"/>} text="Email"/></a>
                <a href = "https://www.linkedin.com/in/daniel-liu-7486621b9/" target= "_blank"><NavBarIcon icon={<AiFillLinkedin size="28"/>} text="LinkedIn"/></a>
                <a href = 'https://github.com/danieljliu' target= "_blank"><NavBarIcon icon={<AiFillGithub size="28"/>} text="GitHub"/></a>
            </div>
        </div>
    )
}
