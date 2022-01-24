/*
 * @Author: your name
 * @Date: 2022-01-24 15:06:12
 * @LastEditTime: 2022-01-24 16:44:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vueapp/build/utils.js
 */



  exports.cssLoaders = function (options) {
    options = options || {}
  
    const cssLoader = {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
   // 这里是添加的内容,配置rem适配
    const px2remLoader = {
      loader: 'px2rem-loader',
      options: {
        remUnit: 75
      }
    }
     
    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
  
    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
      const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
   
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
  
    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
      css: generateLoaders(),
      postcss: generateLoaders(),
      less: generateLoaders('less'),
      sass: generateLoaders('sass', { indentedSyntax: true }),
      scss: generateLoaders('sass'),
      stylus: generateLoaders('stylus'),
      styl: generateLoaders('stylus')
    }
  }
}