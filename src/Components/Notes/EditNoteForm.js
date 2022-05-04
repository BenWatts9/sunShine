import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote, getNoteById } from "../Modules/NotesManager";

export const EditNoteForm = () => {
    const [note, setNote] = useState({ userId: 0, characterId: 0, body:"", })
    const [isLoading, setIsLoading] = useState(false);

    const { noteId } = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = {...note}
        stateToChange[evt.target.id] = evt.target.value
        setNote(stateToChange)
    }

    const updateExistingNote = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedNote = {
            id: noteId,
            userId: note.userId,
            characterId: note.characterId,
            body: note.body
        }
        updateNote(editedNote)
        .then(()=> navigate("/notes"))
    }

    const handleBack = () => {
        navigate("/notes")
    }

    useEffect(()=> {
        getNoteById(noteId)
        .then(note=> {
            setNote(note)
            setIsLoading(false)
        })
    },[noteId])

    return(
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Note Contents:</label>
                        
                    <div className="form-group">
                        <label htmlFor="body"></label>
                        <textarea type="text"
                            id="body"
                            rows="6"
                            cols="37"
                            onChange={handleFieldChange}
                            required
                            autoFocus
                            className="form-control"
                            placeholder="Add your note"
                            value={note.body}>
                        </textarea>
                </div>
                    </div>
                </fieldset>
                    <div>
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingNote}
                            className="btnz select-buttons"
                            >Submit</button>
                    
                    <div className="btnz select-buttons2" onClick={handleBack}> Cancel </div>
                    </div>
        
            </form>


        </>
    )

}