const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

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
                        { test: /\.(jpg|gif|png|jpeg)$/, use: 'url-loader' },
                        { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
                ]
                
        },
        plugins: [
                new VueLoaderPlugin(),
                new htmlWebpackPlugin({
                        template: path.join(__dirname, './src/index.html')
                }) 
        ],
        resolve: {
                alias: {
                        "vue$": "vue/dist/vue.js"
                }
        }

}