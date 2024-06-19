export default async function TambahDataBarang(nama_barang, status_barang) {
    const token = localStorage.getItem('token');
  
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded');
  
    const urlencoded = new URLSearchParams();
    urlencoded.append('nama_barang', nama_barang);
    urlencoded.append('status_barang', status_barang);
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch('/api/tambahBarang', requestOptions);
      const results = await response.json();
      return results;
    } catch (error) {
      console.log("Fetch error:", error);
      throw error;
    }
  }
  