<template>
  <input v-model="newTodo" data-test="newTodo" />
  <button data-test="addTodo" @click="addTodo">addTodo</button>

  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
  </ul>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

interface Todo {
  id: number
  text: string
  done: boolean
}

const newTodo = ref("")
const todos = reactive<Todo[]>([])

const addTodo = () => {
  todos.push({
    id: todos.length + 1,
    text: newTodo.value,
    done: false
  })
  newTodo.value = ""
}
</script>
<style scoped></style>
