import Swal from "sweetalert2"

export default async function HapusAkunPengguna(nama){
    const token = localStorage.getItem('token')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions={
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/hapusPengguna/${nama}`, requestOptions)
        const results = await response.json()
        if (results.success) {
            Swal.fire({
                icon: 'success',
                text: results.message,
            });
        } else {
            Swal.fire({
                icon: 'error',
                text: results.message,
            });
        }
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}