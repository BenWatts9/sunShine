import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Modules/NotesManager";
import { useParams } from "react-router-dom";

export const NoteForm = () => {
    const {characterId} = useParams()

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

    const handleClickSaveNote = (event) => {
        event.preventDefault()

        addNote(note).then(()=> navigate("/notes"))
    }

    return (
        <form className="noteForm">
            <h2 className="noteForm__title">New Note</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="body">Note:</label>
                    <textarea type="text"
                    id="body"
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
           className="btn btn-primary"
           onClick={handleClickSaveNote}
         >
           Save
         </button>
        </form>
    )

}