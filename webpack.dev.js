const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map", // ソースマップを有効化
  watch: true, // watch モードを有効化
  watchOptions: {
    ignored: /node_modules/, // 無視するファイルやディレクトリ
  },
});