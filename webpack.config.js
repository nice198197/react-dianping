var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: "js/bundle.js"
    },

    resolve: {
        extensions: ['', '.js','.jsx']
    },

    module: {
        loaders: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            },
            { 
                test: /\.less$/, 
                exclude: /node_modules/, 
                loader: 'style!css!postcss!less'
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                loader: 'style!css!postcss' 
            },
            { 
                test: /\.(png|gif|jpg|jpeg|bmp)$/i, 
                // 限制大小5kb
                loader: 'url-loader?limit=5000' 
            },  
            { 
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
                loader: 'url-loader?limit=5000'
            } 
        ]
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    devServer: {
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}