export default async function DetailBarang (id_barang){
    const token = localStorage.getItem('token')

    const myHeader = new Headers()
    myHeader.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'GET',
        headers:myHeader,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/detailBarang/${id_barang}`, requestOptions)
        const result = await response.json()
        return result
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}