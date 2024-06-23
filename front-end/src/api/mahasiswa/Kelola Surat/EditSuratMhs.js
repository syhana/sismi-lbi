export default async function EditSuratMhs (nama_surat_mahasiswa, file, id_surat_mahasiswa){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const formData = new FormData()
    formData.append('nama_surat_mahasiswa', nama_surat_mahasiswa)
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
        const response = await fetch(`/api/editSurat/${id_surat_mahasiswa}`, requestOptions);
        const result = await response.json();
        return result
      } catch (error) {
        console.log("Fetch error:", error);
        throw error;
      }
}