import Vue from "vue";
import Router from "vue-router";

import Login from '@/views/Auth/Login'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Auth/Register.vue")
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("@/components/Resources.vue")
    },
    {
      path: "/resourceitem",
      name: "resourceitem",
      component: () => import("@/components/ResourceItem.vue")
    },
    {
      path: "/addresources",
      name: "addresources",
      component: () => import("@/components/AddResources.vue")
    },
    {
      path: "/topnavbar",
      name: "topnavbar",
      component: () => import("@/components/TopNavbar.vue")
    },
    {
      path: "/singleuser/:id",
      name: "singleuser",
      component: () => import("@/components/SingleUser.vue")
    },
  ]
});
