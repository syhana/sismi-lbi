import Swal from "sweetalert2"

export default async function LogoutKalab (){
    const token = localStorage.getItem('tokenKalab')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/logoutKalab`, requestOptions)
        const results = await response.json()
        if (results.success) {
            localStorage.removeItem('tokenKalab')
            Swal.fire({
                icon: 'success',
                text: results.message,
                timer: 2000, 
                showConfirmButton: false
            }).then(() => {
                window.location.href = '/loginKalab';
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