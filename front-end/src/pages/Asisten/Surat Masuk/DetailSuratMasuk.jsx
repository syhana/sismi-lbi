import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import Input from "../../../components/input/input"
import Pdf from "../../../components/elements/Pdf"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailSuratMasukApi from "../../../api/Asisten/Kelola Surat Masuk/DetailSuratMasuk"

export default function DetailSuratMasuk (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]);

    const {no_surat_masuk} = useParams()
    const [detail,setDetail] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailSuratMasukApi(no_surat_masuk);
            if (response.success) {
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

    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Asisten'}>
            <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                    <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} disabled={'true'} value={detail.nama_surat_masuk}/>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf)</span></p>
                    <Pdf pdfUrl={`${import.meta.env.VITE_API_BASE_URL}/fileSuratMasuk/${detail.file_surat_masuk}`}/>
            </div>
        </SidebarAsisten>
        </>
    )
}