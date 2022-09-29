import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuView from "../views/MenuView.vue";
import CalendarView from "../views/CalendarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users",
      name: "users",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuView,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: CalendarView,
    },
  ],
});

export default router;
