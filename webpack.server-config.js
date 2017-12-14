const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    //Сообщить webpack что мы собираем bundle/связку для ноды
    target: 'node',

    //Сообщить webpack путь к файлу нашего серверного приложения
    entry: './server/index.js',

    //Сообщить webpack куда класть/ложить сгенерированный файл
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/, //исключения
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env', {targets:{browsers:['last 2 versions']}}],
                    ]
                }
            }
        ]
    },

    externals: [webpackNodeExternals()]
};