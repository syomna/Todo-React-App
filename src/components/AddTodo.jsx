import { useDispatch } from "react-redux";
import { add } from "../reducers";
import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react";

function AddTodo() {
  const [todo , setTodo] = useState("");
  const dispatch = useDispatch();
  return (<section className="flex">
    <textarea
      className="mr-2 px-2"
      placeholder="what do you have to do today?"
      value={todo}
      onChange={(e) => {
        setTodo(e.target.value);
      }}
    />
    <button onClick={(e) => {
      const id = nanoid();
      dispatch(add(
        {
          id: id,
          todo: todo,
          isCompleted: false
        }
      ));
      setTodo("");
    }} className=" text-white bg-lime-500">ADD</button>
  </section>);
  
}

export default AddTodo;
