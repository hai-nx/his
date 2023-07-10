//const XMLWebpackPlugin = require("xml-webpack-plugin");
let isDev = process.env.NODE_ENV === "development";
//const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    if (config.plugins.has("optimize-css")) {
      config.plugins.delete("optimize-css");
    }
  },

  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: process.env.BASE_URL,
  outputDir: process.env.VUE_APP_OUTPUT_DIR
    ? process.env.VUE_APP_OUTPUT_DIR
    : "dist",
  devServer: {
    port: isDev ? 8900 : 8800,
    https: !isDev,
  },
  /*
  configureWebpack: {
    plugins: [
      new XMLWebpackPlugin({
        // files: xmlFiles
      })
    ]
  }
  */
};
