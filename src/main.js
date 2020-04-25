import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import Routers from './router';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(VueRouter);

Vue.prototype.$modal = ViewUI.Modal;

Vue.config.productionTip = false

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app');
