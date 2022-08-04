import { useMemo } from "react";

const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
      const totalPageCount = Math.ceil(totalCount / pageSize);
      const dots = -1;
  
      const totalPageNumbers = siblingCount + 5;
  
      if (totalPageNumbers >= totalPageCount)
        return Array.from(1, totalPageCount);

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;
  
      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = Array.from(1, leftItemCount);
  
        return [...leftRange, dots, totalPageCount];
      }
  
      if (shouldShowLeftDots && !shouldShowRightDots) {
        
        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = Array.from(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        return [firstPageIndex, dots, ...rightRange];
      }
       
      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = Array.from(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
      }
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };
 
export default usePagination;   