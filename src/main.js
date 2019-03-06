/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vue-lazyload' //路由懒加载
import './plugins/mint-ui' // 加载mint-ui组件
import './mock/mockServer' // 加载mockServer即可
import './fiters' // 加载过滤器

// 注册全局组件标签

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store, // 使用上vuex
})
