export default async function TambahAkunPengguna(file, nama, password, role, nip_kalab) {
    const token = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    const formData = new FormData();
    if (file) {
        formData.append('file', file);
    }
    formData.append('nama', nama);
    formData.append('password', password);
    formData.append('role', role);
    formData.append('nip_kalab', nip_kalab || '');

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tambahPengguna`, requestOptions);
        const results = await response.json();
        console.log(results);
        return results;
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}
