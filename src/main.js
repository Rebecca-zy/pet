
import router from './router';
import Vue from 'vue';
import App from './App.vue';
import ElementUI from'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'
import store from './store/index'
import axios from "axios";
import VueAxios from 'vue-axios';
Vue.prototype.$axios=axios;
Vue.use(VueParticles)
Vue.use(router);
Vue.use(ElementUI);
new Vue({
  el: '#app',
  //配置路由
  router,
  store,
  components: { App },
  template: '<App/>',
  render:h=>h(App)
});

// http request 请求拦截器
axios.interceptors.request.use(config => {
  if(localStorage.getItem('token')){
    if(pathname != '/' &&  pathname != '/content'){
      config.headers.common['token'] = localStorage.getItem('token');
      console.log("token----->"+localStorage.getItem('token'))
    }
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// http response 响应拦截器
axios.interceptors.response.use(response => {
  return response;
},error => {
  if (error.response) {
    switch (error.response.status) {
      // 返回401，清除token信息并跳转到登录页面
      case 401:
        localStorage.removeItem('token');
        router.replace({
          path: '/content'
          //登录成功后跳入浏览的当前页面
          // query: {redirect: router.currentRoute.fullPath}
        })
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
});



// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    let token = localStorage.getItem('token');
    if (token === null || token === '') {
      next('/content');
    }
    else {
      console.log(token)
      alert("success!!!!");
      next();
    }
  }
  else {
    next();
  }
});
Vue.config.productionTip = false





