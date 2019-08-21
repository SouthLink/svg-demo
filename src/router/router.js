import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";
import path from "@/views/path.vue";
import stroke from "@/views/stroke.vue";
import basis from "@/views/basis.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/basis",
      name: "basis",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/basis.vue")
    },
    {
      path: "/animateTransform1",
      name: "animateTransform1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/normal-animation.vue")
    },
    {
      path: "/path",
      name: "path",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/path.vue")
    },
    {
      path: "/stroke",
      name: "stroke",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/stroke.vue")
    },
    {
      path: "/transfrom",
      name: "transfrom",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/transfrom.vue")
    }
  ]
});
