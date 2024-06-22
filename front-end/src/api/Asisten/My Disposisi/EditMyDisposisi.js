export default async function EditMyDisposisi (id_disposisi, tujuan_disposisi){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded')

    const urlencoded = new URLSearchParams()
    urlencoded.append('tujuan_disposisi', tujuan_disposisi)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: urlencoded
    }

    try {
        const response = await fetch(`/api/editMyDisposisi/${id_disposisi}`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }


}