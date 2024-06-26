export default async function UpdateAkunKalab (nama_kalab, file, password_lama, password_baru){
    const token = localStorage.getItem('tokenKalab')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    formData.append('nama_kalab', nama_kalab)
    if (file) {
        formData.append('file', file)
    }
    formData.append('password_lama', password_lama)
    formData.append('password_baru', password_baru)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/updateAkunKalab`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}