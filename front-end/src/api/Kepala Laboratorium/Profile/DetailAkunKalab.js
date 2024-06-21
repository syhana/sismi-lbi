export default async function DetailAkunKalab (){
    const token = localStorage.getItem('tokenKalab')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch('/api/detailAkunKalab', requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}