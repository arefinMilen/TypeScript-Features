function printTodos (todos:string[] | null)
{

    if(todos){
        todos.map((todo) => console.log(todo))
    }
    else
    {
        console.log("no todos")
    }
    
}

const todos = ["todos1","todos2"]
printTodos(todos)


