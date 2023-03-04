$(function () {
    var newTodoTextInput = $("#new-todo-text");
    var addButton = $("#add-button");
    var todoList = $("#todo-list");
    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newTodoText = newTodoTextInput.val().trim();

        newTodoTextInput.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.addClass("invalid");
            return;
        }

        var todoItem = $("<li>").addClass("todo-item");

        setViewMode();

        todoList.append(todoItem);

        newTodoTextInput.val("");

        function setEditMode() {
            todoItem.html("<div><input class='edit-todo-item' type='text'>\
                                <div class='error-message'>Необходимо заполнить поле!</div></div>\
                           <button class='save-button' type='button'>Сохранить</button>\
                           <button class='cancel-button' type='button'>Отменить</button>");

            todoItem.find(".edit-todo-item").val(newTodoText);

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            todoItem.find(".save-button").click(function () {
                var editedTodoItem = todoItem.find(".edit-todo-item");

                var editedTodoText = editedTodoItem.val().trim();

                editedTodoItem.removeClass("invalid");

                if (editedTodoText.length === 0) {
                    editedTodoItem.addClass("invalid");
                    return;
                }

                newTodoText = editedTodoText;

                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.html("<span class='todo-item-text'></span>\
                           <button class='edit-button' type='button'>Редактировать</button>\
                           <button class='delete-button' type='button'>Удалить</button>");

            todoItem.find(".todo-item-text").text(newTodoText);

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }
    });
});