export default async function UpdateAkunMhs (nama_mahasiswa,  alamat_mahasiswa, password_lama, password_baru, file){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    formData.append('nama_mahasiswa', nama_mahasiswa)
    formData.append('alamat_mahasiswa', alamat_mahasiswa)
    formData.append('password_lama', password_lama)
    formData.append('password_baru', password_baru)
    formData.append('file', file)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/editAkunMhs`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}