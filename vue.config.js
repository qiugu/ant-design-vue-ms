const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: '', //基本路径
  productionSourceMap: false,
  assetsDir: 'static',
  filenameHashing: true,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html", // 这里用来区分加载那个 html
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
    /* svgRule.oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
    */
  },
  // 高级的方式
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }),
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      );
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  // CSS 相关选项
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#7546c9',
          'link-color': '#7546c9',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true
      }
    }, // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    modules: false
  },
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,
  // PWA 插件的选项。
  pwa: {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 3002,
    open: true
  },
  transpileDependencies: [],
  // 第三方插件的选项
  pluginOptions: {}
}
