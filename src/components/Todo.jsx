import { useDispatch } from "react-redux";
import {toggle} from "../reducers"

function Todo ({todo}) {
    const completed = todo.isCompleted ? "line-through" : "";
    const dispatch = useDispatch();
    return <div key={todo.id} onClick={() => {
        dispatch(toggle(todo.id));
    }} className=" paper p-2 max-sm:my-2 cursor-pointer">
        <p className={completed}>{todo.todo}</p>
    </div>
}

export default Todo;