export const NoteCard = ({note}) => {
    return (
        <>
            <div className="noteCard">
                <div className="cardContent">
                    <h3> <picture>
                    <img className="stockIcon" src={`${note.character.stockIcon}`} alt="Character Stock Icon" />
                </picture>{note.character.name}</h3>
                    <h4>{note.character.tier} Tier</h4>
                    <div>{note.body}</div>
                </div>
            </div>
        </>
    )
}