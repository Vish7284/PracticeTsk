import { useContext, useEffect } from "react"
import NoteContext from "../store/note-context"


const UI=(props)=>{
    const ctx = useContext(NoteContext);


    return (
        <>
        <ul>
            {props.props.map((note ,index)=>{
                return <li key={index}> {note.title} {note.note}  <button onClick={()=>ctx.removeHandler(note)}>Delete</button></li>
            })}
        </ul>
        </>
    )
};

export default UI;