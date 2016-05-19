var path = require('path');
var webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: 'source-map',
    context: __dirname,
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve('./build/js'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015,presets[]=stage-1,presets[]=react',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css?$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            }
        ]
    }
};