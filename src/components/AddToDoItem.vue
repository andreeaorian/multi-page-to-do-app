<template>
  <div class="add-todo-container">
    <h2>Add New ToDo Item</h2>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="field">
        <label for="title">Title</label>
        <input id="title" v-model="title" required />
      </div>

      <div class="field">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import { useRouter } from 'vue-router'

const title = ref('')
const description = ref('')
const store = useTodoStore()

const handleSubmit = () => {
  if (!title.value.trim()) return

  store.addTodoItem({
    id: Date.now(),
    title: title.value,
    description: description.value,
    isCompleted: false,
  })
}
</script>

<style scoped>
.add-todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .field {
      display: flex;
      flex-direction: column;

      input,
      textarea {
        padding: 0.5rem;
        font-size: 1rem;
      }
    }

    button {
      align-self: flex-start;
      padding: 0.5rem 1rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>
