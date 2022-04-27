const apiUrl = `http://localhost:8088`

export const getAllCharacters = () => {
    return fetch(`${apiUrl}/characters?_sort=tierNumber&_order=asc`)
    .then(res => res.json())
}

export const getAllCharactersForMU = () => {
    return fetch(`${apiUrl}/characters`)
    .then(res => res.json())
}

export const getCharacterById = id => {
    return fetch(`${apiUrl}/characters/${id}`)
    .then(res => res.json())
}
