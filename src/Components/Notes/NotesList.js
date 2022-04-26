import { NoteCard } from "./Note";
import { useState, useEffect } from "react";
import { getAllNotes, deleteNote } from "../Modules/NotesManager";
import "./Note.css"


export const NotesList = () => {
    const [notes, setNotes] = useState([])
    

    const getNotes = () => {
        return getAllNotes()
        .then(notesFromAPI => {
            setNotes(notesFromAPI)
        })
    }

    const handleDeleteNote = id => {
        deleteNote(id).then(()=> getAllNotes().then(setNotes))
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
                        handleDeleteNote={handleDeleteNote}
                    />)}
            </div>
        </>
    )
}