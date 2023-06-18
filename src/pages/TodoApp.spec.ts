import { mount } from "@vue/test-utils"
import TodoApp from "@/pages/TodoApp.vue"

describe("TodoApp.vue", () => {
  it("renders a todo", () => {
    const wrapper = mount(TodoApp)
    const addTodo = wrapper.get('[data-test="addTodo"]')
    expect(addTodo.text()).toBe("addTodo")
  })
})
