<script setup lang="ts">
import { LoginParams } from "@/typings/auth"
import { login, getUserInfo } from "@/api/auth"

const loginParams: LoginParams = {
  username: "admin",
  password: "123456"
}
login(loginParams).then((res) => {
  const token = res.data.token
  window.localStorage.setItem("token", token)
  getUserInfo().then((res) => {
    console.log(res)
  })
})
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    ''''
    <router-link to="/profile">profile</router-link>
    ''''
    <router-link to="/todo">todo</router-link>
  </nav>
  <section>
    <router-view></router-view>
  </section>
</template>

<style scoped></style>
