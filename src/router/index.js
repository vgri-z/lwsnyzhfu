import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/area-manage",
  },
  {
    path: "/data-summary",
    component: () => import("../views/data-summary/data-summary.vue"),
  },
  {
    path: "/area-manage",
    component: () => import("../views/area-manage/area-manage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
