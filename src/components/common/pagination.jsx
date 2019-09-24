import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange} = props;
    console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    


    return ( 
        <nav>
            <ul className="pagination justify-content-center">
                 <li className={ currentPage === 1 ? 'page-item disabled' : 'page-item'}onClick={() => onPageChange(currentPage-1)}><a className="page-link" href="#">Previous</a></li>
                { pages.map(page => (
                    <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                        <a className="page-link" onClick={() => onPageChange(page)}> {page}</a>
                    </li>
                ))}
                <li className={ currentPage === pagesCount ? 'page-item disabled' : 'page-item'} onClick={() => onPageChange(currentPage+1)}><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
     );
}

export default Pagination;