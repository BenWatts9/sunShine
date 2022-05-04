import { useParams } from "react-router-dom"
import { getCharacterById } from "../Modules/CharacterManager"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Character.css"
import { useNavigate } from "react-router-dom"

export const CharacterPage = () => {
    const {characterId} = useParams()
    const [character, setCharacter] = useState([])
    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/characters")
    }

    const getCharacter = (id) => {
        getCharacterById(id).then(charFromAPI => {
            setCharacter(charFromAPI)
        })
    }

    useEffect(()=>{
        getCharacter(characterId)
    }, [])
    
    return (
        <>  
        <div className="charProfile-card">

            <div className="card-charactername">{character.name}</div>
            <div>
            <picture>
                        <img className="char-render" src={`/images/${character.stockIcon}Render.png`} alt={`${character.name} Stock Render`} />
                    </picture>
            </div>
            <div className="char-desc">
                {character.description}
            </div>

            <Link to={`/notes/${character.id}`}>
                <button type="button" className="select-button" id={`${character.id}`}>View Notes</button>
            </Link>
            {/* <Link to={`/matchups`}>
                <button type="button" className="select-button" id={`${character.id}`}>View All Matchups</button>
            </Link> */}

            <div className="back-clicker" onClick={(handleBack)}> &#60;&#60;&#60; To character list </div>

        </div>

        </>
    )
}