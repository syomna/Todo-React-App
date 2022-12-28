import AddTodo from './components/AddTodo';
import Buttons from './components/Buttons';
import { useSelector } from 'react-redux';
import TodosList from './components/TodosList';
function App() {
  const todos = useSelector(state  => {
    return state.todo
  });
  console.log(`todos ${todos}`)
  return (
      <div className=" text-center mx-20">
      <h1 className=" text-amber-300">To-do App</h1>
      <main className=" paper">
        <AddTodo />
        {todos.length > 0 ? <TodosList todos={todos}/> : <p className="my-20">No to-dos, start adding one!</p>}
        <Buttons />
      </main>
    </div>
  );
}

export default App;
