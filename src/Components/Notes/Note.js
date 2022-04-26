import { Link } from "react-router-dom"

export const NoteCard = ({note, handleDeleteNote}) => {
    return (
        <>
            <div className="noteCard">
                <div className="cardContent">
                    <div className="picture-name">
                        <picture>
                            <img className="stockIcon" src={`../images/${note.character.stockIcon}HeadSSBM.webp`} alt="Character Stock Icon" />
                        </picture>
                        <div className="character-name">{note.character.name}
                        </div>
                    </div>
                        
                        <div className="character-tier">{note.character.tier} Tier
                        </div>

                        <div className="note-body">{note.body}</div>

                {note.userId === JSON.parse(sessionStorage.getItem ("sunshine_user")).id ?
                    <>
                        <Link to={`/notes/${note.id}/edit`}>
                            <button className="select-buttons">Edit</button>
                        </Link>
                        <button type="button" className="select-buttons"
                            onClick={() => handleDeleteNote(note.id)}>Delete
                        </button>
                    </> : ""
                }
                
                </div>
            </div>
        </>
    )
}