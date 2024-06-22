export default async function LoginMahasiswa (nim_mahasiswa, password_mahasiswa){
    const myHeaders = new Headers()
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded')

    const urlencoded = new URLSearchParams()
    urlencoded.append('nim_mahasiswa', nim_mahasiswa)
    urlencoded.append('password_mahasiswa', password_mahasiswa)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/loginMhs`, requestOptions);
        const result = await response.json();
        const token = result.token
        if (token) {
            localStorage.setItem('tokenMhs', token)
        }
        return result
      } catch (error) {
        console.log("Fetch error:", error);
        throw error;
      }
}