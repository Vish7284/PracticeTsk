import { useState } from "react";
import NoteContext from "./note-context"


const NoteContextProvider =(props)=>{
    const [notes ,setNotes] = useState([]);
    const [show,setShow] = useState(false);

 const addNotesHandler = (note) => {
   setNotes((prevNote) => {
     return [note, ...prevNote];
   });
 };
 const removeHandler = (title) => {
   const updatedList = notes.filter((note) => note.title !== title);
   setNotes(updatedList);
 };
 const showAddButton = () => {
   setShow(false);
 };
 const showForm = () => {
   setShow(true);
 };
 const notesContext = {
   notes: notes,
   show: show,
   addNotesHandler:addNotesHandler ,
   removeHandler: removeHandler,
   showAddButton: showAddButton,
   showForm: showForm,
   setNotes:setNotes,
 };
    console.log(notes);
    return (
        <NoteContext.Provider value={notesContext}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;