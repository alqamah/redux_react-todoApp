import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
    //const notes=[];
    const {notes} = useSelector((state)=> state.notes);
    const disptach = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={()=>disptach(deleteNote({index}))} className="btn btn-danger">Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
