export default async function HapusSuratMhs (id_surat_mahasiswa){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/hapusSurat/${id_surat_mahasiswa}`, requestOptions);
        const result = await response.json();
        return result
      } catch (error) {
        console.log("Fetch error:", error);
        throw error;
      }

}