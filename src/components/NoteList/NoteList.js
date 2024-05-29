import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
//import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import { noteReducer } from "../../redux/reducers/noteReducer";

function NoteList() {
    //const notes=[];
    const {notes} = useSelector((state)=> state.noteReducer);
    const disptach = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={()=>disptach(noteActions.remove(index))} className="btn btn-danger">Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
