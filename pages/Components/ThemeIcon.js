import useDarkMode from "../Hooks/useDarkMode";
import {FaMoon, FaSun} from "react-icons/fa";

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);


    return (
        <div onClick={handleMode} className="sidebar-icon group">
            {darkTheme ? (<FaSun size='24'/>) : (<FaMoon size='24'/>)}
            <span className="sidebar-tooltip group-hover:scale-100">Change Theme</span>
        </div>
    );
};

export default ThemeIcon