import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue")
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
