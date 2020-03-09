const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/main.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'img',
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new CleanWebpackPlugin(),
        new CopyPlugin([{
            from: 'public',
            to: path.resolve(__dirname, 'build'),
        }]),
    ],
};
