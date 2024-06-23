export default async function TambahDisposisiMhs (id_surat_mahasiswa, tujuan_disposisi){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded')

    const urlencoded = new URLSearchParams()
    urlencoded.append('id_surat_mahasiswa', id_surat_mahasiswa)
    urlencoded.append('tujuan_disposisi', tujuan_disposisi)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/tambahDisposisiMhs`, requestOptions);
        const result = await response.json();
        return result
      } catch (error) {
        console.log("Fetch error:", error);
        throw error;
      }
}