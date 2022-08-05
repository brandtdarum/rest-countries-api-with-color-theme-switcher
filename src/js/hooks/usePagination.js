import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  itemCount,
  pageItems = 8,
  currentPage,
  sibling = 1
}) => {
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(itemCount/pageItems);
    const dots = -1;

    const pageCount = sibling + 5;

    /* CASE 1: total pages is less than page count */
    if(pageCount >= totalPages)
      return range(1, totalPages);

    //check index of left and right sibling
    const leftSibling = Math.max(currentPage - sibling, 1);
    const rightSibling = Math.min(currentPage + sibling, totalPages);
    
    const leftDots = leftSibling > 3;
    const rightDots = rightSibling < totalPages - 2;

    /* CASE 2: no left dots, yes right dots */
    if(!leftDots && rightDots)
      return [
        ...range(1, 3 + (2 * sibling)),
        dots,
        totalPages
      ];

    /* Case 3: left dots, no right dots */
    if(leftDots && !rightDots)
      return [
        1,
        dots,
        ...range(totalPages - (3 + (2 * sibling)) + 1, totalPages)
      ];

    /* CASE 4: yes both dots */
    if(leftDots && rightDots)
      return [
        1,
        dots,
        ...range(leftSibling, rightSibling),
        dots,
        totalPages
      ];
  }, [itemCount, pageItems, currentPage]);

  return paginationRange;
}
 
export default usePagination;


// const usePagination = ({
//     totalCount,
//     pageSize,
//     siblingCount = 1,
//     currentPage
//   }) => {
//     const paginationRange = useMemo(() => {
//       const totalPageCount = Math.ceil(totalCount / pageSize);
//       const dots = -1;
  
//       const totalPageNumbers = siblingCount + 5;
  
//       if (totalPageNumbers >= totalPageCount)
//         return Array.from(1, totalPageCount);

//       const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
//       const rightSiblingIndex = Math.min(
//         currentPage + siblingCount,
//         totalPageCount
//       );

//       const shouldShowLeftDots = leftSiblingIndex > 2;
//       const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
//       const firstPageIndex = 1;
//       const lastPageIndex = totalPageCount;
  
//       if (!shouldShowLeftDots && shouldShowRightDots) {
//         let leftItemCount = 3 + 2 * siblingCount;
//         let leftRange = Array.from(1, leftItemCount);
  
//         return [...leftRange, dots, totalPageCount];
//       }
  
//       if (shouldShowLeftDots && !shouldShowRightDots) {
        
//         let rightItemCount = 3 + 2 * siblingCount;
//         let rightRange = Array.from(
//           totalPageCount - rightItemCount + 1,
//           totalPageCount
//         );
//         return [firstPageIndex, dots, ...rightRange];
//       }
       
//       if (shouldShowLeftDots && shouldShowRightDots) {
//         let middleRange = Array.from(leftSiblingIndex, rightSiblingIndex);
//         return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
//       }
//     }, [totalCount, pageSize, siblingCount, currentPage]);
  
//     return paginationRange;
//   };
 
// export default usePagination;   