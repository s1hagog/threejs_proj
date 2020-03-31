const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test:  /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ],
    },
    plugins: [
        new HtmlPlugin({
            title: 'Three JS Fun',
        }),
    ],
    devServer: {
        contentBase: './dist',
    }
};