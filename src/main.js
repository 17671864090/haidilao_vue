import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';

Vue.prototype.$axios = axios;
import Vant from 'vant';

import 'vant/lib/index.css';


import '../public/css/Initialization.css'  //样式初始化
Vue.use(ElementUI);
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
