import usePagination from "../hooks/usePagination";

const Pagination = ({darkMode, currentPage, setCurrentPage, itemCount}) => {
    const paginationRange = usePagination({currentPage, itemCount});
    let empty = () => {
        console.log("Do this later");
    }

    console.log(paginationRange);
    return (
        <div className="pagination">
            {paginationRange.map((e, i) => 
                (e === -1)? 
                    <button onClick = {() => {empty()}} key = {i}>...</button>:
                    <button onClick = {() => {setCurrentPage(e)}} key={i}>{e}</button>
                
            )}
        </div>
    );
}
 
export default Pagination;