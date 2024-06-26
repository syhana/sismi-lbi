import Swal from "sweetalert2"

export default async function LogoutMahasiswa (){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/logoutMhs`, requestOptions)
        const results = await response.json()
        if (results.success) {
            localStorage.removeItem('tokenMhs')
            Swal.fire({
                icon: 'success',
                text: results.message,
                timer: 2000, 
                showConfirmButton: false
            }).then(() => {
                window.location.href = '/loginMahasiswa';
            });
        } else {
            Swal.fire({
                icon: 'error',
                text: results.message,
            });
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            text: error.message,
        });
    }
}