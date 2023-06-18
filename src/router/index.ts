import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/pages/Profile.vue")
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("@/pages/TodoApp.vue")
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
