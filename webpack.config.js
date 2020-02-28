const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },

    devServer: {
        contentBase: './',
        compress: true,
        port: 9000
    },

    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

};
