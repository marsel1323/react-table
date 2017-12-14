import React from 'react';
import PropTypes from 'prop-types';

import FilterInput from './FilterInput.js';

const filterBar = (props) => {
    const filter = (searchQuery, title) => {
        const filter = props.initialData.filter(user => {
            let filteredData = user[title].toString().toLowerCase().includes(searchQuery);

            if (user.favourite === true) {
                filteredData += user;
            }

            return filteredData;
        });

        props.update({
            data: filter,
        });
    }

    return (
        <tr>
            <th></th>
            {props.headers.map((title, index) => (
                <FilterInput
                    key={index}
                    title={title}
                    initialData={props.initialData}
                    update={props.update}
                    filter={filter}/>
            ))}
        </tr>
    )
}

filterBar.propTypes = {
    headers:PropTypes.array,
    initialData: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            adress: PropTypes.objectOf(PropTypes.string),
            description: PropTypes.string
        })
    ),
    update:PropTypes.func
}

export default filterBar;