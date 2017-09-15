var path = require('path');

module.exports = {
   

    entry: {
      App: "./app/assets/scripts/App.js",
      Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        //change from path: "./app/temp/scripts" because of not an absolute path error
        /*path:  __dirname + '/app/temp/scripts',
        filename: "[name].js"*/
        //path: path.resolve(__dirname, "./app/temp/scripts"),
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}