import Input from "../../../../components/input/input"
import UploadFile from '../../../../components/input/uploadFile'
import ButtonSimple from "../../../../components/button/button"
import { useState} from 'react';
import TambahSuratMhs from "../../../../api/mahasiswa/Kelola Surat/TambahSuratMhs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function TambahSuratContent (){
  const navigate = useNavigate()
    const [nama_surat_mahasiswa, setNamaSurat] = useState('')
    const [file, setFile] = useState(null)

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
          const response = await TambahSuratMhs(nama_surat_mahasiswa, file);
          if (response.success) {
            Swal.fire({
              icon: 'success',
              text: response.message,
            });
            navigate('/mahasiswa/kelolaSurat')
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
        <>
        <div className="p-10 ps-12">
            <form onSubmit={handleSubmit}>
                <p className="text-primary font-bold text-3xl">Tambah Surat</p>
                <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} placeholder={'Masukan nama surat Anda'} value={nama_surat_mahasiswa} onChange={(e) => setNamaSurat(e.target.value)}/>
                <p className="pt-5 pb-5 font-bold text-xl text-secondary">File Surat (.<span className="text-red">pdf</span>)</p>
                <UploadFile label={'Klik untuk tambah file'} icon={'/add file.svg'} classLabel={'text-secondary'} onFileChange={(file) => setFile(file)}/>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} label={'Tambah Surat'} type={'submit'} />
                </div>
            </form>
        </div>
        </>
    )
}