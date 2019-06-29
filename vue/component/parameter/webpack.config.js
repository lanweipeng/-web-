const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/vm.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'bundel.min.js'
    }
}