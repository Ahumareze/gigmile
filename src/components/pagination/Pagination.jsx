import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={idx}>&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={idx}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
















// import React, { useState } from 'react';

// //styles
// import classes from './pagination.module.css';

// //icons
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// let pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// const Item = ({position, onClick, isActive}) => {
//     return(
//         <div className={classes.paginationItem}>{position}</div>
//     )
// }

// function Pagination(props) {
//     //state to update pagination component
//     const [newArr, setNewArr] = useState(pages);

//     const back = () => {
//         //if array length is at the begining don't move, else move back and update array
//         // if()
//     };

//     const forward = () => {

//     }

//     return (
//         <div className={classes.pagination}>
//             <div className={classes.paginationItem} onClick={back} > <FiChevronLeft /> </div>
//             <Item position={newArr[0]} />
//             <Item position={newArr[1]} />
//             <div className={classes.paginationItem}>...</div>
//             <Item position={newArr[newArr.length - 1]} />
//             <div className={classes.paginationItem} onClick={forward} >  <FiChevronRight /> </div>
//         </div>
//     );
// }

// export default Pagination;