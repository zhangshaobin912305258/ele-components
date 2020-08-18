import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册全局回到顶部组件，vue会自动去找该文件夹下的index.js文件
import './globalConponents'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
