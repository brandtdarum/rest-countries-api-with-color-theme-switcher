import blackmoon from "./../../images/quarter_moon_black.svg";
import whitemoon from "./../../images/quarter_moon_white.svg";

const Header = ({setDarkMode, darkMode}) => {
    const clickDarkMode = () => {
        if (darkMode) document.querySelector("body").classList.remove("dark_background");
        else document.querySelector("body").classList.add("dark_background");
        setDarkMode(!darkMode);
    };

    return (
        <header className = {"element" + (darkMode? " dark_element": "")}>
            <h1 className = {darkMode? "dark_text": ""} >Where in the world?</h1>
            <button onClick = {() => clickDarkMode()} className="dark_mode">
                <img src={darkMode? whitemoon: blackmoon} alt="Dark mode logo" />
                <p className = {darkMode? "dark_text": ""}>Dark Mode</p>
            </button>
        </header>
    );
}
 
export default Header;