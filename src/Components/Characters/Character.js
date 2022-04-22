import "./Character.css"

export const CharacterCard = ({character}) => {
    return (
        // <div className="card">
            <div className={`card cardContent__${character.tier}`}>
                <picture>
                    <img className="stockIcon" src={`${character.stockIcon}`} alt="Character Stock Icon" />
                </picture>
                
                <p className="card-charactername">
                    {character.name}
                </p>
            </div>
        // </div>
    )
}