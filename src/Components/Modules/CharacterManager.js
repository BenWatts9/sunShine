const apiUrl = `http://localhost:8088`

export const getAllCharacters = () => {
    return fetch(`${apiUrl}/characters?_sort=tierNumber&_order=asc`)
    .then(res => res.json())
}