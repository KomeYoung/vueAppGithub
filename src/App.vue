<!--
 * @Author: your name
 * @Date: 2022-01-19 11:38:24
 * @LastEditTime: 2022-01-19 14:11:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vueapp/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

<van-grid :column-num="2" icon-size="38">
  <van-grid-item v-for="value in 6" :key="value" icon="https://img01.yzcdn.cn/vant/apple-2.jpg" text="文字"  url="https://www.baidu.com/s?ie=UTF-8&wd=npm%20%E5%AE%89%E8%A3%85Vant%E6%B2%A1%E6%9C%89%E4%BD%9C%E7%94%A8"/>
</van-grid>

   <van-grid :border="true" :column-num="3" square>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>
    <HelloWorld msg="Welcome to Your Vue.js App11"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Image as VanImage, Button, Grid, GridItem } from 'vant'
export default {
  name: 'App',
  components: {
    HelloWorld,
    [Button.name]: Button,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
    [Grid.name]: Grid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
