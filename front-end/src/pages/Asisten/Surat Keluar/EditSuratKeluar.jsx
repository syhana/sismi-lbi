import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import Input from "../../../components/input/input"
import Pdf from "../../../components/elements/Pdf"
import InputFile from "../../../components/input/inputFile"
import ButtonSimple from "../../../components/button/button"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailSuratKeluar from "../../../api/Asisten/Kelola Surat Keluar/DetailSuratKeluar"
import EditSuratKeluarApi from "../../../api/Asisten/Kelola Surat Keluar/EditSuratKeluar"
import Swal from "sweetalert2"

export default function EditSuratKeluar (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    
    const [detail, setDetail] = useState(null)
    const [nama_surat_keluar, setNamaSuratKeluar] = useState('')
    const [file, setFile] = useState(null)
    const {no_surat_keluar} = useParams()

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailSuratKeluar(no_surat_keluar);
            if (response.success) {
              setNamaSuratKeluar(response.data.nama_surat_keluar)
              setDetail(response.data);
            } else {
              console.log("Error fetching detail:", response.message);
            }
          } catch (error) {
            console.log("Error fetching detail:", error);
          }
        };
    
        fetchDetail();
      }, [no_surat_keluar]);

      console.log(detail);

      if (!detail) {
        return <p>Loading...</p>;
      }

      const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();    
        try {
          const response = await EditSuratKeluarApi(nama_surat_keluar, file, no_surat_keluar);
          if (response.success) {
            Swal.fire({
              icon: 'success',
              text: response.message,
            });
            navigate('/asisten/suratKeluar')
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
                    <p className="text-primary font-bold text-3xl">Edit Surat Keluar</p>
                    <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_keluar'} value={nama_surat_keluar} onChange={(e) => setNamaSuratKeluar(e.target.value)}/>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf)</span></p>
                    <Pdf pdfUrl={`/api/fileSuratKeluar/${detail.file_surat_keluar}`}/>
                    <InputFile  placeholder={ detail.file_surat_keluar || 'Klik pilih untuk memilih surat'}/>
                    <div className="flex justify-end">
                        <ButtonSimple className={'bg-primary font-semibold text-base text-white'} label={'Simpan Surat'} type={'submit'}/>
                    </div>
                </form>  
            </div>
        </SidebarAsisten>

        </>
    )
}