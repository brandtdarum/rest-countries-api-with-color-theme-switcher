import FlagCard from "./FlagCard";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Loading from "./Loading";
import Pagination from "./Pagination";

const FlagSearch = ({isPending, reFetch, darkMode, flags}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemCount, setItemCount] = useState(0);

    const getPageContent = () => {
        const currentPageIndex = (currentPage - 1) * 8;
        let lastIndex = currentPageIndex + 8;

        if((currentPageIndex + 7) >= itemCount)
            lastIndex = itemCount;

        console.log(currentPageIndex, lastIndex);
        return Object.values(flags).slice(currentPageIndex, lastIndex);
    }

    useEffect(() => {
        if(flags)
            setItemCount(Object.keys(flags).length);
    }, [flags]);

    return (
        <div className="flagsearch">
            <Searchbar reFetch = {reFetch} darkMode = {darkMode} />
            {
                isPending?
                    <Loading />:
                    <section className = "flagsearch_body">
                        { flags && getPageContent().map((e, i) => (
                            <FlagCard flag={e} darkMode = {darkMode} key = {i} />
                        ))}
                    </section>
            }
            <section className = "flagsearch_footer">
                <Pagination darkMode = {darkMode} currentPage = {currentPage} setCurrentPage = {setCurrentPage} itemCount = {itemCount} />
            </section>
        </div>
    );

}
 
export default FlagSearch;