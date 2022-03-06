import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import css from "./assets/css/css.css"

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;
import 'swiper/swiper-bundle.css'


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: (h) => h(App),
  css,
}).$mount("#app");
