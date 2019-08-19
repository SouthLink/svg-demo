import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";

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
      path: "/animateTransform1",
      name: "animateTransform1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/normal-animation.vue")
    },
    {
      path: "/animateTransform2",
      name: "animateTransform2",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/normal-animation.vue")
    },
    {
      path: "/animateTransform3",
      name: "animateTransform3",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/normal-animation.vue")
    }
  ]
});
