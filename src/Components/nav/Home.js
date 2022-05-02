import { getUserWithCharByUserId } from "../Modules/UserManager"
import { useState, useEffect } from "react"
import { HomeCard } from "./HomeCard"
import "./Home.css"
import { getNotesByUserId, deleteNote, getAllNotes } from "../Modules/NotesManager"
import { NoteCard } from "../Notes/Note";

export const Home = () => {
    const [ users, setUser ] = useState([])
    const [ notes, setNotes ] = useState([])

    const getUser = (id) => {
       return getUserWithCharByUserId(id)
        .then(userRes => {
            setUser(userRes)
        })
    }

    const getNotes = (id) => {
        return getNotesByUserId(id)
        .then(userNotes => {
            setNotes(userNotes)
        })
    }

    const handleDeleteNote = id => {
        deleteNote(id).then(()=> getNotesByUserId(JSON.parse(sessionStorage.getItem("sunshine_user")).id).then(setNotes))
    }

    useEffect(()=>{
        getUser(JSON.parse(sessionStorage.getItem("sunshine_user")).id)
        
    },[])

    useEffect(()=>{
        getNotes(JSON.parse(sessionStorage.getItem("sunshine_user")).id)
    }, [])
    
    return (
        <>
        <h2 className="home-message-title">Welcome to sunShine, {JSON.parse(sessionStorage.getItem("sunshine_user")).username}</h2>

        <p className="home-message">This application is designed to provide an easy place to keep notes and matchup help in Super Smash Brothers Melee.</p>

        <div className="profile-container">

            {users.map(user =>
                <HomeCard 
                key={user.id}
                user={user}
                />)}

            <div className="home-notes-container">
                <div className="home-character-card-title">Your Notes:</div>        
                {notes.map(note =>
                    <NoteCard 
                    key={note.id}
                    note={note}
                    handleDeleteNote={handleDeleteNote}
                    />)}
            </div>
            
        </div>
        
        </>
    )
}