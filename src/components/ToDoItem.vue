<template>
  <li class="todo-item">
    <input type="checkbox" :checked="item.isCompleted" @change="$emit('toggle')" />
    <span :class="{ lineThrough: item.isCompleted }">{{ item.title }}</span>
    <button @click="$emit('delete')">Delete</button>
  </li>
</template>

<script setup lang="ts">
import type { ToDoItem } from '@/types/ToDoItem'

defineProps<{ item: ToDoItem }>()
defineEmits(['toggle', 'delete'])
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background);

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  button {
    background-color: var(--color-button);
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    color: white;
    margin-left: auto;
  }

  &:hover {
    background-color: var(--color-hover);
  }

  .lineThrough {
    text-decoration: line-through;
  }
}
</style>
