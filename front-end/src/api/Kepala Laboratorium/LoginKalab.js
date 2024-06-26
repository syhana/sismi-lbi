export default async function LoginKalab (nip_kalab, password_kalab){
    const myHeaders = new Headers()
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded')

    const urlencoded = new URLSearchParams()
    urlencoded.append('nip_kalab', nip_kalab)
    urlencoded.append('password_kalab', password_kalab)

    const requestOptions = {
        method: 'POST', 
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/loginKalab`, requestOptions)
        const result = await response.json()
        const token = result.token
        if (token) {
            localStorage.setItem('tokenKalab', token)
        }
        return result
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}