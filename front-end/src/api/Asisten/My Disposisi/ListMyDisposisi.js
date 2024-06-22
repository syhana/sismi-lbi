export default async function ListMyDisposisi (){
  const token = localStorage.getItem('tokenAsisten')
  
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

    try {
        const response = await fetch(`/api/tampilMyDisposisi`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}