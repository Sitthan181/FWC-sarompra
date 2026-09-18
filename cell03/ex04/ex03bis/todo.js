$(document).ready(function () {
    const button = $("#new");
    const list = $("#ft_list");

    function saveCookie() {
        let todos = [];
        list.find("div").each(function () {
            todos.push($(this).text());
        });
        document.cookie = "todos=" + JSON.stringify(todos);
    }


    function loadCookie() {
        let cookie = document.cookie;
        if (cookie === "") {
            return;
        }
        let todos = JSON.parse(cookie.split("=")[1]);
        todos.forEach(function (todo) {
            let div = $("<div>");
            div.text(todo);
            list.append(div);
        });
    }


    button.click(function () {
        let todo = prompt("New TO DO:");
        if (todo !== null && todo.trim() !== "") {
            let div = $("<div>");
            div.text(todo);
            list.prepend(div);
            saveCookie();
        }
    });


    list.click(function (event) {
        if (confirm("Do you want to remove this TO DO?")) {
            $(event.target).remove();
            saveCookie();
        }
    });

    loadCookie();
});