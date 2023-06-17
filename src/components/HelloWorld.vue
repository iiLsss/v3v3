<script setup lang="ts">
import { ref } from "vue"
import s from "./index.module.css"
import logoUrl from "../assets/logo.png"
defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <p>{{ msg }}</p>
  <img :src="logoUrl" />
  <div>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
  <a>a 标签 </a>
  <p :class="$style.link">内联 style module => :class="$style.link"</p>
  <p :class="s.text">外联 module.css => :class="s.text"</p>

  <p class="less">less</p>
  <p class="scss">scss</p>
  <div class="animate"></div>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
a {
  color: red;
}
.animate {
  height: 30px;
  width: 60px;
  background-color: orange;
  transform: rotate(25deg);
}
</style>

<style module>
.link {
  color: purple;
}
</style>

<style lang="less" scoped>
.less {
  color: @color;
}
</style>

<style lang="scss" scoped>
.scss {
  color: $color;
}
</style>
