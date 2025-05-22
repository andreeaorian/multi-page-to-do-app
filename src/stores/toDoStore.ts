import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { TodoItem } from '@/types/ToDoItem'

const STORAGE_KEY = 'todoItems'

export const useTodoStore = defineStore('toDoItems', () => {
  const stored = sessionStorage.getItem(STORAGE_KEY)

  const toDoItems = ref<TodoItem[]>(
    stored
      ? JSON.parse(stored)
      : [
          {
            id: 1,
            title: 'Learn Vue 3',
            isCompleted: true,
            description: 'Read the Vue docs and build a sample project',
          },
          {
            id: 2,
            title: 'Convert React knowledge',
            isCompleted: false,
            description: 'Compare React with Vue concepts',
          },
        ],
  )

  const addTodoItem = (item: TodoItem) => {
    toDoItems.value.push(item)
  }

  const toggleComplete = (id: number) => {
    const item = toDoItems.value.find((t) => t.id === id)
    if (item) {
      item.isCompleted = !item.isCompleted
    }
  }

  const removeTodoItem = (id: number) => {
    toDoItems.value = toDoItems.value.filter((t) => t.id !== id)
  }

  watch(
    toDoItems,
    (newVal) => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
    },
    { deep: true },
  )

  return {
    toDoItems,
    addTodoItem,
    toggleComplete,
    removeTodoItem,
  }
})
