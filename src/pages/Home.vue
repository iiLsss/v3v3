<template>
  <hr />
  <HelloWorld :msg="msg.text" />
  <hr />
  <CountPinia />
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"
import CountPinia from "@/components/CountPinia.vue"
import msg from "../msg"
</script>
