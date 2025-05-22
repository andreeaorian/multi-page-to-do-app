<template>
  <ul>
    <TodoItem v-for="item in allTodoItems" :key="item.id" :item="item" />
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'
import type { ToDoItem } from '@/types/ToDoItem'

const store = useTodoStore()

const allTodoItems = computed(() => {
  return store.toDoItems
})
</script>
