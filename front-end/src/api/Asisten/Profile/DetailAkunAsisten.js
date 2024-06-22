export default async function DetailAkunAsisten(){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions= {
        method: 'GET', 
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch('/api/detailAkunAsisten', requestOptions)
        const resulst = await response.json()
        return resulst
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}