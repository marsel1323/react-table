import React from 'react';
import PropTypes from 'prop-types';

const tablePagination = (props) => {
    const handleClick = (e) => {
        props.changePage(Number(e.target.id));
    };

    return (
        <ul id="page-numbers">
            {props.pageNumbers.map(number => {
                    return (
                        <li key={number}
                            id={number}
                            onClick={handleClick}>
                            {number}
                        </li>
                    );
                }
            )}
        </ul>
    )
};

tablePagination.propTypes = {
    pageNumbers:PropTypes.arrayOf(PropTypes.number.isRequired),
    update:PropTypes.func
};

export default tablePagination;