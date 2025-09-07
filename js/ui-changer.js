import { deleteTodo, editTodo } from "./crud.js";
import { elCardTemplate, elTodosContainer } from "./html-elements.js";

export function uiChanger(todos) {
  elTodosContainer.innerHTML = null;

  todos.forEach((element) => {
    const clone = elCardTemplate.cloneNode(true).content;

    const elTitle = clone.querySelector("h5");
    const elDescription = clone.querySelector("p");
    const elDeleteButton = clone.querySelector(".delete");
    const elEditButton = clone.querySelector(".edit");

    elTitle.innerText = element.title;
    elDescription.innerText = element.description;

    // DELETE
    elDeleteButton.addEventListener("click", () => {
      deleteTodo(element.id);
    });

    // EDIT
    elEditButton.addEventListener("click", () => {
      const newTitle = prompt("Yangi nom:", element.title);
      const newDescription = prompt("Yangi izoh", element.description);

      if (newTitle !== null && newDescription !== null) {
        editTodo(element.id, newTitle, newDescription);
      }
    });

    elTodosContainer.append(clone);
  });
}
