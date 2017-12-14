import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow.js';

const tableRows = (props) => {
    if (!props.currentUsers) {
        return (<tr>Loading...</tr>)
    }

    return (
        props.currentUsers.map((user, index) => {
            return (
                <TableRow
                    key={`user-${index}`}
                    user={user}
                    update={props.update}/>
            )
        })
    )
};

tableRows.propTypes = {
    currentUsers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            adress: PropTypes.objectOf(PropTypes.string),
            description: PropTypes.string
        })
    ),
    update: PropTypes.func
};

export default tableRows;