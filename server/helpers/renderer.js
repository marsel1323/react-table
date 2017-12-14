import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import serialize from 'serialize-javascript';

import Routes from '../../src/Routes.js';
import {renderRoutes} from 'react-router-config';

export default (req) => {
    const content = renderToString(
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
    );

    return `
        <html>
        <head>
        <link rel="stylesheet" href="style.css">
        <title>React Table</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="client.bundle.js"></script>
        </body>
        </html>
    `;
}