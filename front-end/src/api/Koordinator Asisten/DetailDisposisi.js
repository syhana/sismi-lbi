export default async function DetailDisposisi (id_disposisi){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions={
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/detailDisposisiKordas/${id_disposisi}`, requestOptions)
        const result = await response.json()
        return result
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}