<template>
  <div class="todo-container">
    <ul class="todo-list">
      <TodoItem
        v-for="item in allTodoItems"
        :key="item.id"
        :item="item"
        @toggle="store.toggleComplete(item.id)"
        @delete="store.removeTodoItem(item.id)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()

const allTodoItems = computed(() => store.toDoItems)
</script>

<style scoped>
.todo-container {
  margin-top: 2rem;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.todo-list :deep(li) {
  font-size: 1.25rem;
}
</style>
