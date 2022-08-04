import blacksearch from "./../../images/search_black.svg";
import whitesearch from "./../../images/search_white.svg";
import blackdropdown from "./../../images/dropdown_black.svg";
import whitedropdown from "./../../images/dropdown_white.svg";

const Searchbar = ({darkMode}) => {
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <section className="flagsearch_header">
            <form action="" className={"searchbar element" + (darkMode? " dark_element": "")}>
                <button>
                    <img src={darkMode? blacksearch: whitesearch} alt="" />
                </button>
                <input className = {darkMode? "dark_text": ""} type="text" id="searchbar_text" placeholder="Search for a country..." />
            </form>
            <div className="dropdown">
                <button className = {"element" + (darkMode? " dark_element": "")}>
                    <span className = {darkMode? "dark_text": ""}>Filter by Region</span>
                    <img src={darkMode? whitedropdown : blackdropdown} alt="" />
                </button>
                <div className = {"element options " + (darkMode? " dark_element": "")}>
                    {regions.map(e => (
                        <a className = {darkMode? "dark_text": ""} href = "#" key = {e}>{e}</a>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default Searchbar;