import React from 'react';

import HeaderMenu from './components/HeaderMenu.js';
import App from './components/App.js';
import Home from './components/Home.js'

export default [
    {
        component: HeaderMenu,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...App,
                path: '/smalldata',
                api: '/dataSmall'
            },
            {
                ...App,
                path: '/bigdata',
                api: '/dataBig'
            }
        ]
    }
];