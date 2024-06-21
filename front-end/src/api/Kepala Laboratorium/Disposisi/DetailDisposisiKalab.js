export default async function DetailDisposisiKalab (id_disposisi){
    const token = localStorage.getItem('tokenKalab')

    const myHeaders = new Headers ()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        methode: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/detailDisposisiKalab/${id_disposisi}`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}