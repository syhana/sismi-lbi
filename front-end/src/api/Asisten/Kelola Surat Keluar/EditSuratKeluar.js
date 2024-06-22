export default async function EditSuratKeluar (nama_surat_keluar, file, no_surat_keluar){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers ()
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
        const response = await fetch(`/api/editSuratKeluar/${no_surat_keluar}`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}