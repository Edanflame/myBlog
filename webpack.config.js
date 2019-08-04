const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
        mode: 'development',
        entry: path.join(__dirname, './src/js/main.js'),
        output: {
                path: path.join(__dirname, './dist'),
                filename: 'bundle.js'
        },
        module: {
                rules: [
                        { test: /\.vue$/, use: 'vue-loader' },
                        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                        { test: /\.(jpg|gif|png|jpeg)$/, use: 'url-loader' }
                ]
                
        },
        plugins: [
                new VueLoaderPlugin()     
        ],
        // htmlLoader: {
        //         ignoreCustomFragments: [/\{\{.*?}}/],
        //         root: path.resolve(__dirname, '../dist'),
        //         attrs: ['img:src', 'link:href']
        // }

}