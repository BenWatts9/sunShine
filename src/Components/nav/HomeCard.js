export const HomeCard = ({user}) => {
    
    
    return(
        <>
            <h2>Welcome to sunShine, {user.username}</h2>

            <div className="home__character__card">
                <div>
                    <h4 className="home-character-card-title">Your Character:</h4>
                    <div className="home-picture-name">
                        <picture>
                            <img className="home-stockIcon" src={`/images/${user.character.stockIcon}HeadSSBM.webp`}    alt="Character Stock Icon" />
                        </picture>
                        <div className="home-card-charactername">
                            {user.character.name}   
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}