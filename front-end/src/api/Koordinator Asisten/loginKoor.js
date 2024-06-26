export default async function LoginAsisten (nama, kataSandi){
    const myHeaders = new Headers()
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded')

    const urlencodded = new URLSearchParams()
    urlencodded.append('nama', nama)
    urlencodded.append('kataSandi', kataSandi)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencodded,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/loginAsisten`, requestOptions)
        const result = await response.json()
        const token = result.token
        if (token) {
            localStorage.setItem('tokenAsisten', token)
        }
        return result
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}