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
                        <label htmlFor="name">Article title:</label>
                            <textarea
                                type="text"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="body"
                                value={note.body}
                            />
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingNote}
                            className="btn btn-primary"
                            >Submit</button>
                    </div>
                </fieldset>
            </form>


        </>
    )

}