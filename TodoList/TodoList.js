document.addEventListener("DOMContentLoaded", function () {
    var newTodoTextInput = document.getElementById("new-todo-text");
    var addButton = document.getElementById("add-button");
    var todoList = document.getElementById("todo-list");
    var form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newTodoText = newTodoTextInput.value.trim();

        newTodoTextInput.classList.remove("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.classList.add("invalid");
            return;
        }

        function setEditMode() {
            todoItem.innerHTML = "<div><input class='edit-todo-item' type='text'>\
            <div class=\"error-message\">Необходимо заполнить поле!</div></div>\
               <button class='save-button' type='button'>Сохранить</button>\
               <button class='cancel-button' type='button'>Отменить</button>";

            todoItem.querySelector(".edit-todo-item").value = newTodoText;

            todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });

            todoItem.querySelector(".save-button").addEventListener("click", function () {
                var editedTodoText = todoItem.querySelector(".edit-todo-item").value.trim();

                todoItem.querySelector(".edit-todo-item").classList.remove("invalid");

                if (editedTodoText.length === 0) {
                    todoItem.querySelector(".edit-todo-item").classList.add("invalid");
                    return;
                }

                newTodoText = editedTodoText;

                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.innerHTML = "<span class='todo-item-text'></span>\
            <button class='edit-button' type='button'>Редактировать</button>\
            <button class='delete-button' type='button'>Удалить</button>";

            todoItem.querySelector(".todo-item-text").textContent = newTodoText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });
        }

        var todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        setViewMode();

        todoList.appendChild(todoItem);

        newTodoTextInput.value = "";
    });
});