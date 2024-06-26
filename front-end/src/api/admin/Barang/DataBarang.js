export default async function DataBarang (){
    const token = localStorage.getItem('token')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOpntions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/allDataBarang`, requestOpntions)
        const results = await response.json()
        return results.data; 
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}
