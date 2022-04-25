import { NoteCard } from "./Note";
import { useState, useEffect } from "react";
import { getAllNotes } from "../Modules/NotesManager";
import "./Note.css"

export const NotesList = () => {
    const [notes, setNotes] = useState([])
    

    const getNotes = () => {
        return getAllNotes()
        .then(notesFromAPI => {
            setNotes(notesFromAPI)
        })
    }

    

    useEffect(()=>{
        getNotes()
    }, [])

    return(
        <>
            <div className="container-cards">
                {notes.map(note =>
                    <NoteCard 
                        key={note.id}
                        note={note}
                    />)}
            </div>
        </>
    )
}