import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Modules/NotesManager";
import { useParams } from "react-router-dom";
import "./Note.css"
import { getCharacterById } from "../Modules/CharacterManager";


export const NoteForm = () => {
    const {characterId} = useParams()
    const [character, setCharacter] = useState([])

    const [note, setNote] = useState({
        id: 0,
        userId: JSON.parse(sessionStorage.getItem("sunshine_user")).id,
        characterId: characterId,
        body: ""
    })

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const newNote = {...note}
        let selectedVal = event.target.value

        newNote[event.target.id] = selectedVal

        setNote(newNote)
    }

    const handleBack = () => {
        navigate("/characters")
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()

        addNote(note).then(()=> navigate("/notes"))
    }

    const getCharacter = id => {
        return getCharacterById(id)
        .then(charFromAPI => {
            setCharacter(charFromAPI)
        })
    }

    useEffect(()=>{
        getCharacter(characterId)
    },[])

    return (
        <form className="noteForm">
            <div className="noteForm__titleImg">
            <div className="noteForm__title">New note for {`${character.name}`}
            </div> 
                <picture>
                        <img className="char-render" src={`/images/${character.stockIcon}Render.png`} alt="Character Stock Icon" />
                    </picture></div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="body"></label>
                    <textarea type="text"
                    id="body"
                    rows="6"
                    cols="37"
                    onChange={handleInputChange}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Add your note"
                    value={note.body}>
                    </textarea>
                </div>
            </fieldset>
            <button
           type="button"
           className="btnz select-buttons"
           onClick={handleClickSaveNote}
         >
           Save
         </button>
         <div className="btnz select-buttons2" onClick={handleBack}> Cancel </div>
        </form>
    )

}