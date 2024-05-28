import "./ToDoList.css";
//importing the useSelector hook
import { useSelector } from "react-redux";

function ToDoList({onToggle}) {
  // accessing todos from the store.state
  const todos = useSelector((state)=> state.todos)
  // equivalent to : const todos = store.getState().todos
  // store should not be imported directly in any component, due to security reasons. (Abstraction and Encapsulation)

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
