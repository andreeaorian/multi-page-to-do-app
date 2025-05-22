<template>
  <div>
    <h1>Todo List</h1>
    <h3>Manage your tasks efficiently</h3>
    <p>Click on the task to mark it as completed</p>
    <p>Click on the task again to unmark it</p>
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
</script>
