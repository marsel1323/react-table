import React from 'react';

const label = (props) => {
    return props.favourite?
    <label onClick={props.onFavourite} className="button-star is-selected">★</label>:
        <label onClick={props.onFavourite} className="button-star">★</label>
};

export default label;