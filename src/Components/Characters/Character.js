import "./Character.css"
import { Link } from "react-router-dom"
import { NotesCharacterList } from "../Notes/NotesCharacterList"

export const CharacterCard = ({character}) => {
    return (
        <>
    
            <div className={`card cardContent__${character.tier}`}>
                <picture>
                    <img className="stockIcon" src={`${character.stockIcon}`} alt="Character Stock Icon" />
                </picture>
                
                <p className="card-charactername">
                    {character.name}   
                </p>
                <button type="button">Add Note</button>
                
                <Link to={`/notes/${character.id}`}>
                <button type="button" id={`${character.id}`}>View Character Notes</button>
                </Link>
            </div>
        </>
    )
}