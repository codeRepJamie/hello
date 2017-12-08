const path = require('path')
  , webpack = require('webpack')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , CleanWebpackPlugin = require('clean-webpack-plugin')
;

module.exports = {
  entry: {
    build: path.resolve(__dirname, './src/main.js'),
    instanceOne: path.resolve(__dirname, './src/instance/instance_1/main.js'),
    vendor: ['currencyValidator', 'iview', 'iviewCss','Velocityjs'],
    vue: ['vue']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': path.resolve(__dirname, './src/components'),
      'currencyValidator': path.resolve(__dirname, './src/js/currency-validator'),
      'iviewCss': 'iview/dist/styles/iview.css',
      'Velocityjs': path.resolve(__dirname, './src/js/velocity.min.js')
    },
    extensions: ['*', '.js', '.vue', '.json', '.css', '.less']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,//这个配置属性用来在编译出错的时候，在浏览器页面上显示错误这个配置属性用来在编译出错的时候，在浏览器页面上显示错误
    open: true,
    inline: true,//实时刷新
    contentBase: path.join(__dirname, "dist")
  },
  performance: {
    hints: false
  },
  devtool: '#cheap-module-eval-source-map',
  externals: {},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vue', 'runtime', 'vendor'] // 指定公共 bundle 的名字。
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: './index.html',
      excludeChunks: ['instanceOne']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/instance/instance_1", "index.html"),
      filename: './instance_index.html',
      excludeChunks: ['build']
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.output.filename = '[name].[chunkhash].js';
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin(['dist/*'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
