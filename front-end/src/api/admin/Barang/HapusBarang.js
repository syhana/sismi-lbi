import Swal from "sweetalert2"

export default async function HapusBarang (id_barang){
    const token = localStorage.getItem('token')

    const myHeaders = new Headers ()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }
    
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/hapusBarang/${id_barang}`, requestOptions)
        const result = await response.json()
        if (result.success) {
            Swal.fire({
                icon: 'success',
                text: result.message,
            });
        } else {
            Swal.fire({
                icon: 'error',
                text: result.message,
            });
        }
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }

}