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

export const addNote = newNote => {
    return fetch(`${apiUrl}/characterNotes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNote)
    }).then(response => response.json())
}

export const getNoteById = id => {
    return fetch(`${apiUrl}/characterNotes/${id}`)
    .then(res => res.json())
}

export const getNotesByUserId = id => {
    return fetch(`${apiUrl}/characterNotes/?userId=${id}&_expand=character`)
    .then(res => res.json())
}

export const updateNote=(note)=>{
    return fetch(`${apiUrl}/characterNotes/${note.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    }).then(data => data.json());
}

export const deleteNote = id => {
    return fetch(`${apiUrl}/characterNotes/${id}`,{
        method: "DELETE"
    }).then(result=> result.json())
}