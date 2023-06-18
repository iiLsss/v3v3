import { mount } from "@cypress/vue"

import TodoApp from "./TodoApp.vue"

describe("TodoApp", () => {
  it("renders a todo", () => {
    mount(TodoApp)
    const text = "play with cypress"
    cy.get("[data-test='newTodo']").type(text)
    cy.get('[data-test="addTodo"]').click()
    cy.get(".todo-list li")
      .should("have.length", 1)
      .last()
      .should("have.text", text)
  })
})
