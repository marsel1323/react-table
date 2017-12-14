import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import Routes from './Routes.js';

ReactDOM.hydrate(
    <BrowserRouter>
        <div>
            {renderRoutes(Routes)}
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);