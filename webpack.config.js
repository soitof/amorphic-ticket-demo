var path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    //entry: {
    //    app: './config/app.ts',
    //    vendor: './config/vendor.ts',
    //    amorphic: './apps/ticket/public/js/index.ts'
    //},
    entry: './apps/ticket/public/js/index.ts',
    output: {
        //filename: '/[name].js',
        filename: '/bundle.js',
        path: '/'
    },
    module: {
        rules: [
            {
                test: /\.component|service|module\.tsx?$/,
                loader: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            amorphic: path.resolve(__dirname, './node_modules/semotus/index.js')
        }
    },
    devtool: 'inline-source-map'
};