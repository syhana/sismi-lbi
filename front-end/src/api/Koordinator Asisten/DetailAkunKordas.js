export default async function DetailAkunKordas(){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions= {
        method: 'GET', 
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/detailAkunKordas`, requestOptions)
        const resulst = await response.json()
        return resulst
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}