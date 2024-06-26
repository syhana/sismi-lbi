export default async function TambahSuratMasuk (nama_surat_masuk, file) {
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    formData.append('nama_surat_masuk', nama_surat_masuk)
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
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tambahSuratMasuk`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}