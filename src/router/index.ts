import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
      path: "/report",
      name: "report",
      component: () =>
        import("../views/ReportView.vue"),
    },
    {
      path: "/library",
      name: "library",
      component: () =>
        import("../views/LibraryView.vue"),
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
