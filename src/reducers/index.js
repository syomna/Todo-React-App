import { createSlice, current } from "@reduxjs/toolkit";

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const todos = createSlice({
  name: "todos",
  initialState: storedTodos,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    toggle: (state, action) => {
      const todo = state.find((e) => e.id == action.payload);
      todo.isCompleted = !todo.isCompleted;
      localStorage.clear();
      localStorage.setItem("todos", JSON.stringify(state));
    },
    clear: (state) => {
      localStorage.clear();
      return [];
    },
    filter: (state, action) => {
      console.log(action.payload + "payload");
      const allTodos = JSON.parse(localStorage.getItem("todos"));
      switch (action.payload) {
        case "showall":
          return allTodos;
        case "completed":
          return allTodos.filter((e) => e.isCompleted === true);
        case "active":
          return allTodos.filter((e) => e.isCompleted === false);
      }
    },
  },
});

export const { add, clear, toggle, filter } = todos.actions;

export default todos;
