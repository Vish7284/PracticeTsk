import { useContext, useState } from "react";
import Modal from "./Modal";
import NoteContext from "../store/note-context";


const AddNote =()=>{

    const ctx = useContext(NoteContext);

    const [newNote ,setNewNote] = useState("");
    const [title ,setTitle] = useState("");

    const titleChangeHnadler =(e)=>{
setTitle(e.target.value);
    }

    const addNoteHnadler =(e)=>{
        setNewNote(e.target.value);
    }

    const formSubmitHandler =(e)=>{
        e.preventDefault();
        const obj = {
            title:title,
            note:newNote
        }
        console.log(obj);
        ctx.addNotesHandler(obj);
        ctx.showAddButton();
      fetch("https://ecommcontactus-default-rtdb.firebaseio.com/NotesData.json",{
        method:"POST",
        body:JSON.stringify({
            noteDatafor:obj,
        }),
        headers:{
            "Content-Type":"application/json"
        }
      }).then((res)=>{
        if(res.ok){
            return res.json();
        }
        else{
            return res.json().then((data)=>{
                throw new Error ("NHi hua save")
            })
        }
      }).then((data)=>{
        console.log(data);
      }).catch((err)=>
    console.log(err))

    }
    return (
      <Modal>
        <div>
          <form onSubmit={formSubmitHandler}>
            <h2>Add New Note</h2>
            <label htmlFor="title">Note Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={titleChangeHnadler}
            />
            <label htmlFor="note">Note Desc.</label>
            <textarea id="note" value={newNote} onChange={addNoteHnadler} />
            <button>Add Note</button>
          </form>
          <button onClick={()=>ctx.showAddButton()}>Close</button>
        </div>
      </Modal>
    );
}

export default AddNote;