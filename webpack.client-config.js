const path = require('path');

module.exports = {
    //Сообщить webpack путь к файлу нашего клиентского приложения
    entry: './src/index.js',

    //Сообщить webpack куда класть/ложить сгенерированный файл
    output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'public')
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
            }/*,
             {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
             }*/
        ]
    }
};