import { NoteCard } from "./Note";
import { useState, useEffect } from "react";
import { getAllNotes, deleteNote, getNotesByUserId, getNotesByCharacterID } from "../Modules/NotesManager";
import "./Note.css"
import { Link } from "react-router-dom";
import { getAllCharactersForMU } from "../Modules/CharacterManager";
import { useNavigate } from "react-router-dom";


export const NotesList = () => {
    const [notes, setNotes] = useState([])
    const [userNotes, setUserNotes] = useState([])
    const [notesDisplay, setNotesDisplay] = useState([])
    const [characters, setCharacters] = useState([])
    const [firstLook, setFirstLook] = useState(true)

    const navigate = useNavigate()

    const getNotes = () => {
        return getAllNotes()
        .then(notesFromAPI => {
            setNotes(notesFromAPI)    
        })
    }

    const getUserNotes = (id) => {
        return getNotesByUserId(id)
        .then(userNotesFromAPI => {
            setUserNotes(userNotesFromAPI)
            if (firstLook){
                setNotesDisplay(userNotesFromAPI)
                setFirstLook(false)
            }
        })
    }

    const getCharacters = () => {
        return getAllCharactersForMU()
        .then(charactersFromAPI => {
            setCharacters(charactersFromAPI)
        })
    }

    const getCharacterNotes = (charId) => {
        getNotesByCharacterID(charId)
        .then(charNotes => {
            setNotesDisplay(charNotes)
        })
    } 

    // handles All notes vs User notes dropdown selection
    const handleNotesInputChange = (evt) => {
        if(evt.target.value == 1) {
            setNotesDisplay(notes)
        }
        if(evt.target.value == 2) {
            setNotesDisplay(userNotes)
        }
    } 

    // Deletes Notes
    const handleDeleteNote = id => {
        deleteNote(id)
        .then(()=> getNotesByUserId(JSON.parse(sessionStorage.getItem("sunshine_user")).id).then(setNotesDisplay))
    }


    // Handles character note dropdown selection
    const handleCharacterNotesInputChange = (evt) => {
        getCharacterNotes(evt.target.value)
    }

    

    useEffect(()=> {
        getUserNotes(JSON.parse(sessionStorage.getItem("sunshine_user")).id)
    }, [notesDisplay])

    useEffect(()=>{
        getNotes()
    }, [notesDisplay])

    useEffect(()=> {
        getCharacters()
    },[])

    return(
        <>
            <div className="notes-form">
            <fieldset>
            <label htmlFor="selectedCharacter">View Character Notes </label>
                    <select name="id"
                    id="id"
                    onChange={handleCharacterNotesInputChange}
                    className="form-control-notes form-control">
                        <option value="0">View Character Notes</option>
                        {characters.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
            </fieldset>
            <fieldset>
            <label htmlFor="selectedNotesList">View Notes </label>
                    <select name="id"
                    id="id"
                    onChange={handleNotesInputChange}
                    className="form-control-notes form-control">
                        <option value="0">View Notes</option>
                        <option value="1">All Notes</option>
                        <option value="2">My Notes</option>
                    </select>
            </fieldset>
            
                <button type="button" className="select-button form-control-notes addbtn" onClick={()=>navigate("/characters")} >+ Note</button>
            </div>
            <hr className="bar-marker"/>
            <div className="container-cards">
                {notesDisplay.map(note =>
                    <NoteCard 
                        key={note.id}
                        note={note}
                        handleDeleteNote={handleDeleteNote}
                    />)}
            </div>
        </>
    )
}