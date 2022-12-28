import Todo from "./Todo";

function TodosList ({todos}) {
    return (
        <div className=" h-60 overflow-y-scroll my-4">
            {
                todos.map((todo) => <Todo todo={todo}/>)
            }
        </div>
    );
}

export default TodosList;