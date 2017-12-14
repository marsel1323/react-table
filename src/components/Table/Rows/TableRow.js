import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label.js';

const tableRow = (props) => {
    const handleClick = () => {
        props.user.favourite = !props.user.favourite;
    };

    return (
        <tr onClick={() => props.update({activeUser: props.user})}>
            <td>
                <Label onFavourite={handleClick} favourite={props.user.favourite}/>
                {/*{props.user.favourite ?*/}
                    {/*<label onClick={handleClick} className="button-star is-selected">★</label> :*/}
                    {/*<label onClick={handleClick} className="button-star">★</label>}*/}
            </td>
            <td>{props.user.id}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.email}</td>
            <td>{props.user.phone}</td>
        </tr>
    );
};

tableRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        adress: PropTypes.objectOf(PropTypes.string),
        description: PropTypes.string
    }),
    update: PropTypes.func
}

export default tableRow;