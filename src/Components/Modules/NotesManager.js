const apiUrl = `http://localhost:8088`

export const getAllNotes = () => {
    return fetch(`${apiUrl}/characterNotes?_expand=character`)
    .then(res => res.json())
}

//get all of the notes with the same characterIds
export const getNotesByCharacterID = (id) => {
    return fetch(`${apiUrl}/characterNotes/?characterId=${id}&_expand=character`)
    .then(res => res.json())
} 