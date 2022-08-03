import blacksearch from "./../../images/search_black.svg";
import whitesearch from "./../../images/search_white.svg";
import blackdropdown from "./../../images/dropdown_black.svg";
import whitedropdown from "./../../images/dropdown_white.svg";

const MapSearch = ({darkMode}) => {
    return (
        <div className="map_search">
            <section className="map_search_header">
                <form action="" className={"searchbar element" + (darkMode? " dark_element": "")}>
                    <button>
                        <img src={darkMode? blacksearch: whitesearch} alt="" />
                    </button>
                    <input className = {darkMode? "dark_text": ""} type="text" id="searchbar_text" placeholder="Search for a country..." />
                </form>
                <div className="dropdown">
                    <button className = {"element" + (darkMode? " dark_element": "")}>
                        <span>Filter by Region</span>
                        <img src={darkMode? blackdropdown: whitedropdown} alt="" />
                    </button>
                </div>
            </section>
            <section className = "map_search_body">

            </section>
        </div>
    );
}
 
export default MapSearch;