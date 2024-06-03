import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {addTodo} from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { resetNotification } from "../../redux/reducers/notificationReducer";
import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);
  if (message){
    setTimeout(()=>{
      disptach(resetNotification());
    },3000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //disptach(addTodo(todoText));
    disptach(todoActions.add(todoText)); //dispatching action redux-toolkit-store
    setTodoText("");
  };

  return (
    <div className="container">
    {message?<div style={{borderColor:"lightgreen"}} className="alert">
      {message}
    </div>:""}
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;