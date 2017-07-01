var webpack = require('webpack');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].style.css"
    //disable: process.env.NODE_ENV === "development"
});

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
        extensions: [".jsx", ".js",".json",".scss"]
    },

    module: {
        rules: [
            /*{
                test:"/\.scss$/",
                use: ExtractTextPlugin.extract({
                    fallbackLoader:'style-loader',
                    use:['css-loader','sass-loader'],
                    publicPath:'/dist'
                }),
                exclude:"/node_modules/"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                exclude:"/node_modules/"
            },*/
            {
                test: /\.scss$/,
                use:extractSass.extract({
                    use: [
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: "sass-loader", // compiles Sass to CSS
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    // use style-loader in development
                     fallback: "style-loader"
                })
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
                        presets: ['env']
                    }
                }],
            },
           
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                //title: 'Output Management',
                favicon: './assets/favicon.ico',
                template : 'index.html',
                hash :true
            }
        ),
        extractSass,
    ]

};

module.exports = config;