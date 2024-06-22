export default async function RegisterMahasiswa(nim_mahasiswa, nama_mahasiswa, alamat_mahasiswa, password_mahasiswa, file) {
    const formdata = new FormData();
    formdata.append("nim_mahasiswa", nim_mahasiswa);
    formdata.append("nama_mahasiswa", nama_mahasiswa);
    formdata.append("alamat_mahasiswa", alamat_mahasiswa);
    formdata.append("password_mahasiswa", password_mahasiswa);
    if (file) {
      formdata.append("file", file);
    }
  
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`/api/registerMhs`, requestOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Fetch error:", error);
      throw error;
    }
  }
  