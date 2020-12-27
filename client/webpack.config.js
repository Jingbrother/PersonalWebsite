const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const isDevEnv = process.env.NODE_ENV === "development";
const common = [
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "redux",
  "classnames",
  "history",
  "tslib",
];
function getCssLoaders(modules = false) {
  return [
    isDevEnv ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules,
        localIdentName: "[name]_[local]_[hash:base64:5]",
        camelCase: modules ? true : undefined,
        url: !isDevEnv,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        plugins: [
          autoprefixer({
            remove: false,
            browsers: ["firefox >= 4", "chrome >= 4", "not ie >= 0"],
          }),
        ],
      },
    },
    "sass-loader",
  ];
}
module.exports = {
  entry: {
    common,
    main: path.join(__dirname, "src/main.tsx"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new TsconfigPathsPlugin(),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevEnv ? "[name].css" : "[name]_[contenthash].css",
      chunkFilename: isDevEnv ? "[id].css" : "[id]_[chunkhash].css",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    open: true, // 默认自动打开网页
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.s?css$/,
        use: getCssLoaders(false),
        exclude: /\.(m|module)\.s?css$/,
      },
      {
        test: /\.(m|module)\.s?css$/,
        use: getCssLoaders(true),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".scss"],
    modules: ["node_modules"],
    alias: {
      lib: path.resolve(__dirname, "./src/lib"),
      src: path.resolve(__dirname, "./src"),
      styles: path.resolve(__dirname, "./src/styles"),
    },
  },
};
