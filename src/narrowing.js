function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos");
    }
}
var todos = ["todos1", "todos2"];
printTodos(todos);
