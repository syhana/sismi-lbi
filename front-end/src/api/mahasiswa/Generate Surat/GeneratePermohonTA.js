export const GeneratePermohonTA = async (nama_generate, id_jenis, token) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nama_generate})
    };
  
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/generatePermohonTA/${id_jenis}`, requestOptions);
    if (!response.ok) {
        throw new Error('Data surat tidak tersedia');
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
  };
  