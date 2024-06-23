import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import Input from "../../../components/input/input"
import Pdf from "../../../components/elements/Pdf"
import InputFile from "../../../components/input/inputFile"
import ButtonSimple from "../../../components/button/button"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailSuratMasuk from "../../../api/Asisten/Kelola Surat Masuk/DetailSuratMasuk"
import EditSuratMasukApi from "../../../api/Asisten/Kelola Surat Masuk/EditSuratMasuk"
import Swal from "sweetalert2"

export default function EditSuratMasuk (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    
    const [detail, setDetail] = useState(null)
    const [nama_surat_masuk, setNamaSuratMasuk] = useState('')
    const [file, setFile] = useState(null)
    const {no_surat_masuk} = useParams()

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailSuratMasuk(no_surat_masuk);
            if (response.success) {
              setNamaSuratMasuk(response.data.nama_surat_masuk)
              setDetail(response.data);
            } else {
              console.log("Error fetching detail:", response.message);
            }
          } catch (error) {
            console.log("Error fetching detail:", error);
          }
        };
    
        fetchDetail();
      }, [no_surat_masuk]);


      if (!detail) {
        return <p>Loading...</p>;
      }

      const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();    
        try {
          const response = await EditSuratMasukApi(nama_surat_masuk, file, no_surat_masuk);
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
      }


    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
            <div className="p-10 ps-12">
                <form onSubmit={handleSubmit}>
                    <p className="text-primary font-bold text-3xl">Edit Surat Masuk</p>
                    <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_masuk'} value={nama_surat_masuk} onChange={(e) => setNamaSuratMasuk(e.target.value)}/>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf)</span></p>
                    <Pdf pdfUrl={`/api/fileSuratMasuk/${detail.file_surat_masuk}`}/>
                    <InputFile  placeholder={ detail.file_surat_masuk || 'Klik pilih untuk memilih surat'} onChange={handleFileChange}/>
                    <div className="flex justify-end">
                        <ButtonSimple className={'bg-primary font-semibold text-base text-white'} label={'Simpan Surat'} type={'submit'}/>
                    </div>
                </form>  
            </div>
        </SidebarAsisten>
        </>
    )
}