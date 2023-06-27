const path = require("path");
const TailwindCSS = require('tailwindcss');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  entry: {
    server: "./server/index.js",
    client: "./client/index.tsx",
  },
  mode: "development",
  target: "node",

  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          //   options: {
          //     presets: [
          //       "@babel/preset-env",
          //       [
          //         "@babel/preset-react",
          //         {
          //           runtime: "automatic",
          //         },
          //       ],
          //     ],
          //   },
        },
      },

      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [TailwindCSS],
              },
            },
          },
          {
            loader: style
          },
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  plugins: [
	new MiniCssExtractPlugin({
	filename: './build.css',
	}),
],

};
