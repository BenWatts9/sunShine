import { useState, useEffect } from "react";
import { CharacterCard } from "./Character";
import { getAllCharacters } from "../Modules/CharacterManager";
import "./Character.css"


export const CharacterList = () => {
    const [ characters, setCharacters ] = useState([])
    let tierLetter = "S"

    const getCharacters = () => {
        return getAllCharacters()
        .then(charactersFromAPI => {
            setCharacters(charactersFromAPI)
        })
    }

    useEffect(()=>{
        getCharacters()
    }, [])

    return (
    <>
        <div className="container-cards">
            
            {characters.map(character =>
                                <> 
                                    <CharacterCard 
                                    key={character.tierNumber}
                                    character={character}
                                    /> 
                                </>
            )}                        
        </div>
    </>
    )
}