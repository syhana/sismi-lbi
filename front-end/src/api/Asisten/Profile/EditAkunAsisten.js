export default async function EditAkunAsisten (file, nama_asisten, password_lama, password_baru){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    if (file) {
        formData.append('file', file)
    }
    formData.append('nama_asisten', nama_asisten)
    formData.append('password_lama', password_lama)
    formData.append('password_baru', password_baru)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    }

    try {
        const response = await fetch('/api/editAkunAsisten', requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}