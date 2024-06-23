export default async function TambahSuratMhs(nama_surat_mahasiswa, file){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)
    
    const formData = new FormData()
    formData.append('nama_surat_mahasiswa', nama_surat_mahasiswa)
    formData.append('file', file)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/tambahSurat`, requestOptions);
        const result = await response.json();
        return result
      } catch (error) {
        console.log("Fetch error:", error);
        throw error;
      }
}