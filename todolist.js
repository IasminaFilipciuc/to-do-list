const addButton = document.querySelector(".addButoon");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Delete";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));
    removeButton.addEventListener("click", () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(item) {
    container.removeChild(item);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

document.addEventListener("click", check);
window.addEventListener("keyup", e => {
  if (e.which == 13) {
    check();
  }
})
