const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: [/.js$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {                
                test: [/.css$|.scss$/],                
                use:[                    
                    'style-loader',                  
                    'css-loader',
                    'sass-loader'
                ]            
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'shop',
            template: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new CopyWebpackPlugin([
            {from:'img', to:'img'} 
        ])
    ]
};