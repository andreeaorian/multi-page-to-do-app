import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem.vue', () => {
  const mockItem = {
    id: 1,
    title: 'Test Todo',
    isCompleted: false,
    description: 'Mock description',
  }

  it('renders the title', () => {
    const wrapper = mount(TodoItem, {
      props: { item: mockItem },
    })
    expect(wrapper.text()).toContain('Test Todo')
  })

  it('checkbox is unchecked when not completed', () => {
    const wrapper = mount(TodoItem, {
      props: { item: mockItem },
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    expect((checkbox.element as HTMLInputElement).checked).toBe(false)
  })

  it('adds lineThrough class when completed', () => {
    const wrapper = mount(TodoItem, {
      props: {
        item: {
          ...mockItem,
          isCompleted: true,
        },
      },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('lineThrough')
  })

  it('emits toggle event on checkbox change', async () => {
    const wrapper = mount(TodoItem, {
      props: { item: mockItem },
    })
    await wrapper.find('input[type="checkbox"]').trigger('change')
    expect(wrapper.emitted('toggle')).toHaveLength(1)
  })

  it('emits delete event on button click', async () => {
    const wrapper = mount(TodoItem, {
      props: { item: mockItem },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('delete')).toHaveLength(1)
  })
})
