const webpack = require('webpack');
const path = require('path');

let config = {
    mode: 'development',
    entry: './docs/js/vendor.js',
    output: {
        path: path.resolve(__dirname, './docs/js/'),
        filename: 'vendor.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
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

module.exports = config;
