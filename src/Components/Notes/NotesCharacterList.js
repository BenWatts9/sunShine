import { NoteCard } from "./Note";
import { useState, useEffect } from "react";
import { getNotesByCharacterID, deleteNote } from "../Modules/NotesManager";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Note.css"

export const NotesCharacterList = () => {
    const [charNotes, setCharNotes] = useState([])
    
    const {characterId} = useParams()

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/characters")
    }
    
    const handleDeleteNote = id => {
        deleteNote(id).then(()=> getNotesByCharacterID(characterId).then(setCharNotes))
    }


    useEffect(()=> {
        getNotesByCharacterID(characterId)
        .then(charNotes => {
            setCharNotes(charNotes)
        })
    }, [characterId])

    return(
        <>
            <div className="container-cards">
                {charNotes.map(note =>
                    <NoteCard 
                        key={note.id}
                        note={note}
                        handleDeleteNote={handleDeleteNote}
                    />)}
            </div>
            <div className="back-clicker" onClick={(handleBack)}> &#60;&#60;&#60;Back </div>
            
        </>
    )
}