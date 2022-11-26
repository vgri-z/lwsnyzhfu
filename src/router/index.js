import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "machine-monitor",
  },
  {
    path: "/data-summary",
    component: () => import("../views/data-summary/data-summary.vue"),
  },
  {
    path: "/area-manage",
    component: () => import("../views/area-manage/area-manage.vue"),
  },
  {
    path: "/always-monitor",
    component: () => import("../views/always-monitor/always-monitor.vue"),
  },
  {
    path: "/machine-monitor",
    component: () => import("../views/machine-monitor/machine-monitor.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
