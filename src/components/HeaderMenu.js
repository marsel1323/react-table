import React from 'react';
import {renderRoutes} from 'react-router-config';
import {NavLink} from 'react-router-dom';

const HeaderMenu = ({route})=>{
    return (
        <div>
            <header className="main-header">
                <nav>
                    <ul>
                        <div className="menu">
                            {/*<li><NavLink exact to="/">Главная</NavLink></li>*/}
                            <li><NavLink to="/smalldata">Small Data</NavLink></li>
                            <li><NavLink to="/bigdata">Big Data</NavLink></li>
                        </div>
                    </ul>
                </nav>
            </header>
            {renderRoutes(route.routes)}
        </div>
    )
};

export default HeaderMenu;