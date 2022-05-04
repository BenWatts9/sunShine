import "./Character.css"
import { Link } from "react-router-dom"
import React from "react"

export const CharacterCard = ({character}) => {
    return (
        <>
            <div className={`card cardContent__${character.tier}`}>
                <div className="picture-name">
                    <picture>
                        <img className="stockIcon" src={`/images/${character.stockIcon}HeadSSBM.webp`} alt="Character Stock Icon" />
                    </picture>
                    <div className="char-desc">
                        <Link to={`/characters/${character.id}`} className="card-name-link">
                            {character.name}   
                        </Link>
                    </div>
                </div>
                <div className="button-container">
                <Link to={`/notes/${character.id}/add`} >
                <button type="button" className="select-button" id={`${character.id}`}>+ Note</button>
                </Link>
                
                <Link to={`/notes/${character.id}`}>
                <button type="button" className="select-button" id={`${character.id}`}>View Notes</button>
                </Link>
                </div>
            </div>
            
        </>
    )
}