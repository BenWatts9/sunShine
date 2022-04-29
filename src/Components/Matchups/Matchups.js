import { useState, useEffect } from "react";
import { getAllCharactersForMU, getCharacterById } from "../Modules/CharacterManager";
import "./Matchups.css"




export const Matchups = () => {
    const [characters, setCharacters] = useState([])
    
    
    const [char, setChar] = useState({
            name: "",
            tier: "",
            id: JSON.parse(sessionStorage.getItem("sunshine_user")).characterId,
            stockIcon: "",
            tierNumber: 0,
    })
    


    //gets all characters from api for comparison
    const getCharacters = () => {
        return getAllCharactersForMU()
        .then(charactersFromAPI => {
            setCharacters(charactersFromAPI)
        })
    }

    //gets character object from api based on logged in user's main char id
    const getMainCharacter = id => {
        return getCharacterById(id)
        .then(charFromAPI => {
            setChar(charFromAPI)
        })
    }
    
    const CompareCharactersWin = ({character}) => {
            return <>
                    <div className="mu-card-container-win">
                        <p className="matchup-card matchup-card-win">
                            {character.name}
                            <img className="stockIconMu" src={`../images/${character.stockIcon}HeadSSBM.webp`} alt="Character Stock Icon"/>
                        </p>
                    </div>
                    </>
    }

    const CompareCharactersLose = ({character}) => {
            return <>
                    <div className="mu-card-container-lose">
                        <p className="matchup-card matchup-card-lose">
                            {character.name}
                            <img className="stockIconMu" src={`../images/${character.stockIcon}HeadSSBM.webp`} alt="Character Stock Icon"/>
                        </p>
                    </div>
                    </>
    }


    
    const handleMatchupInputChange = (evt) => {
        
        const newChar = {...char}
        let selectedVal = evt.target.value
        newChar[evt.target.id] =selectedVal
        getCharacterById(parseInt(newChar.id)).then((res)=>{
            setChar(res)
        })
    }

    useEffect(()=> {
        getMainCharacter(char.id)
    },[])

    useEffect(()=>{
        getCharacters()
    },[])

    
    return(
        <>
            <fieldset>
            <label htmlFor="selectedCharacter">View Character Matchups </label>
                    <select value={char} name="id"
                    id="id"
                    onChange={handleMatchupInputChange}
                    className="form-control">
                        <option value="0">View Character Matchups</option>
                        {characters.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
            </fieldset>
                <h4 className="card-name-header"><img className="headerStockIconMu" src={`../images/${char.stockIcon}HeadSSBM.webp`} alt="Character Stock Icon"/>{char.name}</h4>
            <div className="mu-container">
                <div className="win-container">
                <p className="beat-lose-label">beats</p>
                {characters.map(character => 
                        <>  
                            {character.tierNumber > char.tierNumber ? 
                            <CompareCharactersWin 
                            key={character.id}
                            character={character}/> : ""}
                        </>
                    )}
                </div>
                <div className="lose-container">
                <p className="beat-lose-label">loses to</p>
                {characters.map(character => 
                        <>  
                            {character.tierNumber < char.tierNumber ? 
                            <CompareCharactersLose
                            key={character.id}
                            character={character}/> : ""}
                        </>
                    )}
                    </div>
            </div>
        </>
    )
}