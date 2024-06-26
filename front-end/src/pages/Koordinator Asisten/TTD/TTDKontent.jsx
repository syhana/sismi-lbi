import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PDFViewer from './PDFViewer';
import TTDKordas from '../../../api/Koordinator Asisten/TTDKordas';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function TTDKontent() {
    const navigate = useNavigate()
  const { id_disposisi, nama_surat, jenisSurat } = useParams();
  const [coordinate, setCoordinate] = useState({ x: null, y: null });
  let pdfUrl;

  if (jenisSurat == 'suratMahasiswa') {
    pdfUrl = `/api/fileSuratMahasiswa/${nama_surat}`;
  } else {
    pdfUrl = `/api/fileSuratKeluar/${nama_surat}`;
  }

  let url = `${pdfUrl}`

  const handleCoordinate = async (x, y) => {
    setCoordinate({ x, y });
    console.log(x);
    console.log(y);

    try {
        const response = await TTDKordas(id_disposisi, x, y)
        if (response.success) {
            Swal.fire({
                icon: 'success',
                text: response.message,
            });
            navigate('/koor/disposisiSurat')
        } else {
            Swal.fire({
                icon: 'error',
                text: response.message,
            }); 
        }
    } catch (error) {
        console.log("Error fetching data:", error);
    }
  };

  console.log(coordinate);

  return (
    <div className="App">
      <PDFViewer pdfUrl={url} onCoordinateChange={handleCoordinate} />
    </div>
  );
}
