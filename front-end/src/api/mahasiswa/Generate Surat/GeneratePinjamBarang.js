export default async function GeneratePinjamBarang (data, id_jenis){
    const token = localStorage.getItem('tokenMhs')
    
    const myHeaders = new Headers ()
    myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Content-type', 'application/json')

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    }

    
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/generatePinjamBarang/${id_jenis}`, requestOptions);
    if (!response.ok) {
        throw new Error('Data tidak tersedia');
    }

    const blob = await response.blob();
    const disposition = response.headers.get('Content-Disposition');
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(disposition);
    const fileName = matches ? matches[1].replace(/['"]/g, '') : 'download.docx';

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);

}