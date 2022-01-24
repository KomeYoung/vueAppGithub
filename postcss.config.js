/*
 * @Author: your name
 * @Date: 2022-01-24 17:15:07
 * @LastEditTime: 2022-01-24 17:15:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vueapp/postcss.config.js
 */
module.exports = {
    "plugins": {
      "autoprefixer": {},
      'postcss-pxtorem': {
        rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
        propList: ['*']
      }
    }
  }