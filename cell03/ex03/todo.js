const button = document.getElementById("new");
const list = document.getElementById("ft_list");

function saveCookie() {
    let todos = [];
    list.querySelectorAll("div").forEach(function (item) {
        todos.push(item.textContent);
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
        let div = document.createElement("div");
        div.textContent = todo;
        list.appendChild(div);
    });
}

button.addEventListener("click", function () {
    let todo = prompt("New TO DO:");
    if (todo !== null && todo.trim() !== "") {
        let div = document.createElement("div");
        div.textContent = todo;
        list.prepend(div);
        saveCookie();
    }
});

list.addEventListener("click", function (event) {
    if (confirm("Do you want to remove this TO DO?")) {
        event.target.remove();
        saveCookie();
    }
});

loadCookie();