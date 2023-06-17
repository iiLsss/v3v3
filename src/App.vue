<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"
import CountPinia from "@/components/CountPinia.vue"
import msg from "./msg"
import { LoginParams, Response } from "@/typings/auth"
import { login, getUserInfo } from "@/api/auth"

const loginParams: LoginParams = {
  username: "admin",
  password: "123456"
}
login(loginParams).then((res) => {
  const token = res.data.token
  window.localStorage.setItem("token", token)
  getUserInfo().then((res: Response) => {
    console.log(res)
  })
})
</script>

<template>
  <router-view></router-view>

  <HelloWorld :msg="msg.text" />
  <hr />
  <CountPinia />
</template>

<style scoped></style>
