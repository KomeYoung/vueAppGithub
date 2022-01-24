/*
 * @Author: your name
 * @Date: 2022-01-19 11:38:24
 * @LastEditTime: 2022-01-24 17:54:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vueapp/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
