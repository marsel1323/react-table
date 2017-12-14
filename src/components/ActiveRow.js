import React from 'react';
import PropTypes from 'prop-types';

const activeRow = (props) => {
    if (!props.activeUser) {
        return (
            <div className="fixed-block">
                <h3>Пользователь не выбран</h3>
                <p>Пожалуйста, кликните по интересующей вас строке в таблице с пользователями</p>
            </div>
        );
    }

    return (
        <div className="fixed-block">
            <p>Выбран пользователь: <b>{props.activeUser.firstName} {props.activeUser.lastName}</b></p>
            <p>Описание:</p>
            <textarea name="" id="" cols="30" rows="10" value={props.activeUser.description} readOnly/>
            <p>Адрес проживания: <b>{props.activeUser.adress.streetAddress}</b></p>
            <p>Город: <b>{props.activeUser.adress.city}</b></p>
            <p>Провинция/штат: <b>{props.activeUser.adress.state}</b></p>
            <p>Индекс: <b>{props.activeUser.adress.zip}</b></p>
        </div>
    );
};

activeRow.propTypes = {
    activeUser: PropTypes.object
};

export default activeRow;

