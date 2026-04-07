let input = document.querySelector(".input");
let ul = document.querySelector(".ul");
let addBtn = document.querySelector(".addBtn");

function addTask() {
  let task = input.value.trim();
  if (task === "") return;

  let li = document.createElement("li");
  li.className = "li";
  ul.appendChild(li);

  let span = document.createElement("span");
  span.textContent = task;
  li.appendChild(span);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delbtn";
  li.appendChild(delBtn);

  delBtn.addEventListener("click", function() {
    li.remove();
  });

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "editBtn";
  li.appendChild(editBtn);
 

  editBtn.addEventListener("click", function() {

    if (editBtn.textContent === "Edit") {

      span.style.display = "none";

      let editInput = document.createElement("input");
      editInput.value = span.textContent;

      li.insertBefore(editInput, delBtn);
      editInput.focus();

      editBtn.textContent = "Update";
    
      
      editInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && editInput.value.trim() !== "") {
          span.textContent = editInput.value.trim();
          span.style.display = "inline";
          editInput.remove();
          editBtn.textContent = "Edit";
        }
      });

    } else {

      let editInput = li.querySelector("input");
      
      if (editInput.value.trim() !== "") {
        span.textContent = editInput.value.trim();
      }

      span.style.display = "inline";
      editInput.remove();

      editBtn.textContent = "Edit";
    }

  });

  input.value = "";
}



addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});



