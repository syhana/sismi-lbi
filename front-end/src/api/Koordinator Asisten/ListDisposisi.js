export default async function ListDisposisi (){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers ()
    myHeaders.append('Authorization', `Berare ${token}`)

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch('/api/listDisposisiKordas', requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}