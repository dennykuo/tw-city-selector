const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// tw-city-selector.js
let pluginConfig = {
    entry: './src/tw-city-selector.js',
    output: {
        filename: 'tw-city-selector.js',
        library: 'TwCitySelector',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true,
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new CopyWebpackPlugin([
            { from: './tw-city-selector.*', to: './docs/js' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};

// data.js (for demo)
let dataConfig = {
    entry: './src/data.js',
    output: {
        path: path.resolve(__dirname, 'docs/js/'),
        filename: 'data.js',
        library: 'data',
        libraryExport: 'default'
    }
};

module.exports = [ pluginConfig, dataConfig ];
