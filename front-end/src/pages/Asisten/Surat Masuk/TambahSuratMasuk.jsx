import Swal from 'sweetalert2';
import Input from "../../../components/input/input"
import UploadFile from '../../../components/input/uploadFile'
import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import ButtonSimple from "../../../components/button/button"
import { useNavigate } from 'react-router-dom';
import TambahSuratMasukApi from "../../../api/Asisten/Kelola Surat Masuk/TambahSuratMasuk";
import { useState, useEffect} from 'react';

export default function TambahSuratMasuk() {
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem('tokenAsisten');
      if (!token) {
        navigate('/notAllowed')
      }
    }, [navigate]); 
    
  const [nama_surat_masuk, setNamaSuratMasuk] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire({
        icon: 'error',
        text: 'Anda harus memilih file PDF untuk mengunggah',
      });
      return;
    }

    try {
      const response = await TambahSuratMasukApi(nama_surat_masuk, file);
      if (response.success) {
        Swal.fire({
          icon: 'success',
          text: response.message,
        });
        navigate('/asisten/suratMasuk')
      } else {
        Swal.fire({
          icon: 'error',
          text: response.message ,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Terjadi kesalahan saat menambahkan surat',
      });
      console.error('Error:', error);
    }
  };

  return (
    <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
      <div className="p-10 ps-12">
        <form onSubmit={handleSubmit}>
          <p className="text-primary font-bold text-3xl">Tambah Surat Masuk</p>
          <Input
            label={'Nama Surat'}
            className={'text-secondary text-lg font-bold pb-1'}
            name={'nama_surat_masuk'}
            placeholder={'Masukan nama surat Anda'}
            value={nama_surat_masuk}
            onChange={(e) => setNamaSuratMasuk(e.target.value)}
          />
          <p className="pt-5 pb-5 font-bold text-xl text-secondary">File Surat (.pdf)</p>
          <UploadFile
            icon="/public/add file.svg"
            label="Klik untuk tambah file"
            classLabel="text-secondary"
            onFileChange={(file) => setFile(file)}
          />
          <div className="flex justify-end">
            <ButtonSimple
              className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'}
              label={'Tambah Surat'}
              type={'submit'}
            />
          </div>
        </form>
      </div>
    </SidebarAsisten>
  );
}
