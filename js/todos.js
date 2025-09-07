import { uiChanger } from "./ui-changer.js";

export let todos = JSON.parse(localStorage.getItem("todos")) || [];

export function changeTodos(newTodos) {
  todos = newTodos;
  uiChanger(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}
