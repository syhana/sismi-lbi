export default async function semuaDataJenisSurat() {
    const token = localStorage.getItem('tokenMhs'); 
    if (!token) {
      console.error('Token tidak tersedia');
      return;
    }
  
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`/api/allJenisSurat`, requestOptions);
      const result = await response.json()
      return result
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  }
  