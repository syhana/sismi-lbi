export default async function DetailAkunPengguna (nama){
    const token = localStorage.getItem('token')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/detailPengguna/${nama}`, requestOptions)
        const results = await response.json()
        console.log(results);
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}