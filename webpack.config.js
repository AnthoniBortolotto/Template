const path = require("path");

const DEV = true;

module.exports = {
    entry: [
        "./src/Database.ts",
        "./src/index.ts"
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: DEV ? "development" : "production",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchOptions: {
            ignored: [
                path.resolve(__dirname, "dist"),
                path.resolve(__dirname, "node_modules")
            ]
        }
    },
};