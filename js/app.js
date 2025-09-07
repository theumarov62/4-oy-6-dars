import { uiChanger } from "./ui-changer.js";
import { todos } from "./todos.js";
import { addTodo } from "./crud.js";
import {
  elInputAdd,
  elInputDescAdd,
  elAddButton,
  elErrorTextInput,
} from "./html-elements.js";

uiChanger(todos);

elAddButton.addEventListener("click", () => {
  const title = elInputAdd.value.trim();
  const description = elInputDescAdd.value.trim();

  if (!title) {
    elErrorTextInput.innerText = "Inputga hech nima yozilmagan!";
    setTimeout(() => {
      elErrorTextInput.innerText = "";
    }, 2000);
    return;
  }

  addTodo(title, description);
  elInputAdd.value = "";
  elInputDescAdd.value = "";
});
