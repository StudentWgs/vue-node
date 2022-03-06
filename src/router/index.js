import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue"
import list from "../views/list.vue"
import cart from "../views/cart.vue"
import my from "../views/my.vue"
import search from "../views/search.vue"


Vue.use(VueRouter);

const routes = [
  {path:'/',component:home},
  {path:'/list',component:list},
  {path:'/cart',component:cart},
  {path:'/my',component:my},
  {path:'/search',component:search},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
