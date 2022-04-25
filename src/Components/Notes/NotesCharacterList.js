import { NoteCard } from "./Note";
import { useState, useEffect } from "react";
import { getNotesByCharacterID } from "../Modules/NotesManager";
import { useParams } from "react-router-dom";

export const NotesCharacterList = () => {
    const [charNotes, setCharNotes] = useState([])
    
    const {characterId} = useParams()


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
                    />)}
            </div>
        </>
    )
}