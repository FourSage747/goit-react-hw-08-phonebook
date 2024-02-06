const url = 'https://65ba4146b4d53c066552685b.mockapi.io/contacts';

export const getContacts = async () => {
    const data = await fetch(url)
    return await data.json()
}

export const addContacts = async (res) => {
    const data = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
    })
    return await data.json()
}

export const deleteContacts = async (id) => {
    const data = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
    return await data.json()
}