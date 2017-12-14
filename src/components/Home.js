import React from 'react';

const home = () => {
    return (
        <div style={{'margin':'20px', 'textAlign':'center'}}>
            <h2>Приветствую</h2>
            <h3>Для просмотра таблицы кликните по интересующей Вас выборке в заголовке сайта</h3>
            <p>Small data для маленькой выборки</p>
            <p>Big data для большой выборки</p>
        </div>
    )
};

export default {
    component: home
}