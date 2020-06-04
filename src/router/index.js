import Vue from "vue";
import VueRouter from "vue-router";
import chikondiman from "../views/Home.vue";
import shop from "../views/shop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "chikondiman",
    component: chikondiman,
  },
  {
    path: "/shop",
    name: "shop",
    component: shop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
