
module.exports = {
    mode: "development",

    module: {
        rules: [

            ////////////// babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
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
    }
};