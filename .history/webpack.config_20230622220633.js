const path = require("path");

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  entry: {
    server: './server/index.js',
    client: './client/index.ts',
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
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },

      {
        //test → ファイル名を検知する（CSSファイルを検知する）
        test: /\.css$/,
        //CSSファイルを検知した場合、以下ルールを適用する（css-loaderを実行せよ）
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },

      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
};
