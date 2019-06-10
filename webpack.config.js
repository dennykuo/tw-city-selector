const webpack = require('webpack');
const path = require('path');

let fileName = 'tw-city-selector';
let moduleName = 'TwCitySelector';
let config = [];


// ------------------------------
// Library config
// ------------------------------
[fileName, fileName + '.min'].forEach(function(key) {
    config.push(makeLibraryConfig(key));
    config.push(makeLibraryConfig(key, './docs/js'));
});

function makeLibraryConfig(configName, outputPath = './dist') {
    let isMinify = configName.indexOf('min') > -1;

    let config = {
        mode: 'production',
        entry: './src/' + fileName + '.js',
        output: {
            path: path.resolve(__dirname, outputPath),
            filename: configName + '.js',
            library: moduleName,
            libraryTarget: 'umd',
            libraryExport: 'default',
            umdNamedDefine: true
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            //
        ]
    };

    if ( ! isMinify) config.devtool = 'source-map';

    return config;
}


// ------------------------------
// data file config
// ------------------------------
config.push({
    mode: 'production',
    entry: './src/data.js',
    output: {
        path: path.resolve(__dirname, './docs/js/'),
        filename: 'data.js',
        library: 'data',
        libraryExport: 'default'
    }
});



// ------------------------------
// exports
// ------------------------------
module.exports = config;
