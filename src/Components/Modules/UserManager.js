const apiUrl = `http://localhost:8088`

export const getUserWithCharByUserId = (id) => {
    return fetch(`${apiUrl}/users/?id=${id}&_expand=character`)
    .then(res => res.json())
} 