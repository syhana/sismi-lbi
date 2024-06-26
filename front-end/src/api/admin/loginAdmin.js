export default async function loginAdmin(username, password){
    const myHeaders = new Headers()
    myHeaders.append("Content-type", "application/x-www-form-urlencoded")

    const urlencoded = new URLSearchParams()
    urlencoded.append('username', username)
    urlencoded.append('password', password)

    const requestOptions = {
        method: 'post',
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/loginAdmin`, requestOptions)
        const results = await response.json()
        console.log(results)
        const token = results.token
        if (token) {
            localStorage.setItem('token', token)
        }
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}