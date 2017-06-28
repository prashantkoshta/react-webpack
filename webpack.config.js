var webpack = require('webpack');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app:"./app"
    },
    output: {
        publicPath : 'dist',
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },

    resolve: {
        extensions: [".js", ".jsx",".json"]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Output Management',
                favicon: './assets/favicon.ico',
                template : 'index.html',
                hash :true
            }
        ),
        new ExtractTextPlugin('styles.css'),
    ],


    module: {
        rules: [
            {
                test:"/\.scss$/",
                use: ExtractTextPlugin.extract({
                    fallbackLoader:'style-loader',
                    use:['css-loader','sass-loader'],
                    publicPath:'/dist'
                }),
                exclude:"/node_modules/"
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 10000 } // Convert images < 10k to base64 strings
                }]
            },
            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { 
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    },
                }],
            },
           
        ],
    },


};

module.exports = config;