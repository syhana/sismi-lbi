export default async function (nama_baru, password, role, file, nama){
    const token = localStorage.getItem('token')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    formData.append('nama_baru', nama_baru)
    formData.append('password', password)
    formData.append('role', role)
    if (file) {
        formData.append('file', file)  
    }

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/editPengguna/${nama}`, requestOptions)
        const result = await response.json()
        return result
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}
