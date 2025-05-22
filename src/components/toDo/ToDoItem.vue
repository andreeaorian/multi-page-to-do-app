<template>
  <li>
    <input type="checkbox" :checked="item.isCompleted" />
    <span>{{ item.title }}</span>
  </li>
</template>

<script setup lang="ts">
import type { ToDoItem } from '@/types/ToDoItem'

defineProps<{ item: ToDoItem }>()
</script>
