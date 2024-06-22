export default async function TambahSuratKeluar (nama_surat_keluar, file) {
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    formData.append('nama_surat_keluar', nama_surat_keluar)
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
        const response = await fetch('/api/tambahSuratKeluar', requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}