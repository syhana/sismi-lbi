export default async function DataSuratMahasiswa (){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'GET', 
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/dataSuratListMhs`, requestOptions);
        const result = await response.json();
        return result
      } catch (error) {
        console.log("Fetch error:", error);
        throw error;
      }
}