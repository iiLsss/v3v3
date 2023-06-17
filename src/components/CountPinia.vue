<template>
  <div>pinia count: {{ count }}</div>
  <button @click="add">++</button>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store"
import { storeToRefs } from "pinia"

const mainStore = useMainStore()
const { count } = storeToRefs(mainStore)

const add = () => {
  mainStore.$patch((state) => {
    state.count++
  })
}
</script>
