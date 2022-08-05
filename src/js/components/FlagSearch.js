import FlagCard from "./FlagCard";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Loading from "./Loading";
import Pagination from "./Pagination";
// import usePagination from "../hooks/usePagination";

const FlagSearch = ({darkMode, flags}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemCount, setItemCount] = useState(0);


    useEffect(() => {
        if(flags)
            setItemCount(Object.keys(flags).length);
    }, [flags]);

    return flags? (
        <div className="flagsearch">
            <Searchbar darkMode = {darkMode} />
            <section className = "flagsearch_body">
                { flags && Object.values(flags).slice(currentPage-1, currentPage+7).map((e, i) => (
                    <FlagCard flag={e} darkMode = {darkMode} key = {i} />
                ))}
            </section>
            <section className = "flagsearch_footer">
                <Pagination darkMode = {darkMode} currentPage = {currentPage} setCurrentPage = {setCurrentPage} itemCount = {itemCount} />
            </section>
        </div>
    ) : <Loading />;
}
 
export default FlagSearch;