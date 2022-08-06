import blacksearch from "./../../images/search_black.svg";
import whitesearch from "./../../images/search_white.svg";
import blackdropdown from "./../../images/dropdown_black.svg";
import whitedropdown from "./../../images/dropdown_white.svg";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Searchbar = ({reFetch, darkMode}) => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const [query, setQuery] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [region, setRegion] = useState("");

    const search = () => {
        let newQuery = {};
        
        if(region !== "")
            newQuery["region"] = region;

        if(searchQuery !== "")
            newQuery["search"] = searchQuery;

        setQuery(newQuery);
        reFetch();
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => search(), 500);
        return () => clearTimeout(timeOutId);
        
    }, [searchQuery, region]);

    return (
        <section className="flagsearch_header">
            <form onSubmit = {e => e.preventDefault()} action="" className={"searchbar element" + (darkMode? " dark_element": "")}>
                <button>
                    <img src={darkMode? blacksearch: whitesearch} alt="" />
                </button>
                <input className = {darkMode? "dark_text": ""} type="text" value = {searchQuery} onChange = {e => setSearchQuery(e.target.value)} id="searchbar_text" placeholder="Search for a country..." />
            </form>
            <div className="dropdown">
                <button className = {"element" + (darkMode? " dark_element": "")}>
                    <span onClick = {() => {setRegion("");}} className = {darkMode? "dark_text": ""}>{query.get("region")? query.get("region"): "Filter by Region"}</span>
                    <img src={darkMode? whitedropdown : blackdropdown} alt="" />
                </button>
                <div className = {"element options " + (darkMode? " dark_element": "")}>
                    {regions.map(e => (
                        <span onClick = {() => {setRegion(e);}}className = {darkMode? "dark_text": ""} href = "" key = {e}>{e}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default Searchbar;