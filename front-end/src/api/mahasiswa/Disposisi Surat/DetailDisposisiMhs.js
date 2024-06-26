export default async function DetailDisposisiMhs(id_disposisi) {
    const token = localStorage.getItem('tokenMhs');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/detailDisposisiMhs/${id_disposisi}`, requestOptions);
        const result = await response.json();
        return result
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}
