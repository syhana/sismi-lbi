export default async function UpdateAdmin(username, password_lama, password_baru) {
  const token = localStorage.getItem('token');

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-type', 'application/x-www-form-urlencoded');

  const urlEncoded = new URLSearchParams();
  urlEncoded.append('username', username);
  urlEncoded.append('password_lama', password_lama);
  urlEncoded.append('password_baru', password_baru);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlEncoded,
    redirect: 'follow'
  };

  try {
    const response = await fetch('/api/updateAdmin', requestOptions);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
}
