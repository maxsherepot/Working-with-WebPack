
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",

    module: {
        rules: [

            ////////////// css loaders
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },

            ////////////// sass/scss loaders
            {
                test: /\.(s[ca]ss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },

            ////////////// babel loader 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },

            ////////////// images loader
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: "[name]-[sha1:hash:7].[ext]"
                        }
                    }
                ]
            },

            ////////////// fonts loader
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "main-[hash:8].css"
        })
    ]
};