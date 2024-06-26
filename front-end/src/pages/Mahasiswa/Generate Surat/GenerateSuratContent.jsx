import React, { useEffect, useState } from 'react';
import JenisSurat from "../../../components/button/JenisSurat";
import { useNavigate } from "react-router-dom";
import semuaDataJenisSurat from '../../../api/mahasiswa/Generate Surat/DataJenisSurat';

export default function GenerateSuratContent() {
  const navigate = useNavigate();
  const [jenisSurat, setJenisSurat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await semuaDataJenisSurat();
      if (data && data.success) {
        setJenisSurat(data.data);
      }
    };
    fetchData();
  }, []);

  const handleSuratClick = (namaJenis, idJenis) => {
    if (namaJenis === 'Surat Peminjaman Ruangan') {
      navigate(`/mahasiswa/generateSurat/pinjamRuang/${idJenis}`);
    } else if (namaJenis === 'Surat Peminjaman Barang') {
      navigate(`/mahasiswa/generateSurat/pinjamBarang/${idJenis}`);
    } else if (namaJenis === 'Surat Permohonan Pengerjaan TA') {
      navigate(`/mahasiswa/generateSurat/permohonanTA/${idJenis}`);
    } else {
      console.error('Jenis surat tidak dikenal:', namaJenis);
    }
  };

  return (
    <>
      <div className="py-10 px-16">
        <p className="text-primary font-semibold text-3xl pb-4">Generate Surat</p>
        <p className="text-secondary font-semibold text-lg">Pilih jenis surat yang ingin di generate</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-8/12 gap-2">
          {jenisSurat.map((surat) => (
            <div key={surat.id_jenis} className="pe-10 pt-5">
              <JenisSurat 
                label={surat.nama_jenis} 
                id={surat.id_jenis} 
                onClick={() => handleSuratClick(surat.nama_jenis, surat.id_jenis)} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
