import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TodoItem } from '@/types/ToDoItem'

export const useTodoStore = defineStore('toDoItems', () => {
  const toDoItems = ref<TodoItem[]>([
    {
      id: 1,
      title: 'Learn Vue 3',
      isCompleted: false,
      description: 'Read the Vue docs and build a sample project',
    },
    {
      id: 2,
      title: 'Convert React knowledge',
      isCompleted: true,
      description: 'Compare React with Vue concepts',
    },
  ])

  const addTodo = (item: TodoItem) => {
    toDoItems.value.push(item)
  }

  return {
    toDoItems,
    addTodo,
  }
})
