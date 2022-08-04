import FlagCard from "./FlagCard";
import { useState } from "react";
import Searchbar from "./Searchbar";
// import usePagination from "../hooks/usePagination";

const FlagSearch = ({darkMode, flags}) => {
    const [currentPage, setCurrentPage] = useState(0);


    let currentFlags = flags;
    return (
        <div className="flagsearch">
            <Searchbar darkMode = {darkMode} />
            <section className = "flagsearch_body">
                { flags && flags.slice(currentPage, currentPage+8).map((e, i) => (
                    <FlagCard flag={e} darkMode = {darkMode} key = {i} />
                ))}
            </section>
            <section className = "flagsearch_footer">
            </section>
        </div>
    );
}
 
export default FlagSearch;