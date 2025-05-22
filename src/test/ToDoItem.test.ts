import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem.vue', () => {
  const todo = {
    id: 1,
    title: 'Test Todo',
    isCompleted: false,
  }

  it('renders title', () => {
    const wrapper = mount(TodoItem, {
      props: { item: todo },
    })
    expect(wrapper.text()).toContain(todo.title)
  })
})
