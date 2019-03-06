import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import loading from '../common/imgs/loading.gif'

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
