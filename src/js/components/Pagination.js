import blackprev from "./../../images/leftarrow_black.svg";
import whiteprev from "./../../images/leftarrow_white.svg";
import blacknext from "./../../images/rightarrow_black.svg";
import whitenext from "./../../images/rightarrow_white.svg";

import usePagination from "../hooks/usePagination";

const Pagination = ({darkMode, currentPage, setCurrentPage, itemCount}) => {
    const paginationRange = usePagination({currentPage, itemCount});
    let empty = () => {
        console.log("Do this later");
    }

    return (
        <div className="pagination">
            <button 
                className = { (darkMode? " dark_text dark_page": "") + ((currentPage === 1)? " disabled": "")} 
                onClick = {() => {setCurrentPage(currentPage - 1)}}
                >
                <img src={darkMode? whiteprev: blackprev} alt="" />
            </button>
            {paginationRange.map((e, i) => 
                    <button 
                        className = { (darkMode? " dark_text dark_page": "") } 
                        onClick = {(e === -1)? 
                                () => {empty()} :
                                () => {setCurrentPage(e)}
                        } key = {i}>
                        {(e === -1)? "..." : e}
                    </button>
            )}
            <button 
                className = { (darkMode? " dark_text dark_page": "") + ((currentPage === paginationRange[6])? " disabled": "")} 
                onClick = {() => {setCurrentPage(currentPage + 1)}}
                >
                <img src={darkMode? whitenext: blacknext} alt="" />
            </button>
        </div>
    );
}
 
export default Pagination;