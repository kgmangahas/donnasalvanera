var path = require('path');

module.exports = {
   

    entry: {
      App: "./app/assets/scripts/App.js"
    },
    output: {
        //change from path: "./app/temp/scripts" because of not an absolute path error
        /*path:  __dirname + '/app/temp/scripts',
        filename: "[name].js"*/
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    }
}