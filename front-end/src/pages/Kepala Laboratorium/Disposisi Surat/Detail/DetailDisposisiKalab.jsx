import SidebarKalab from "../../../../components/sidebar/Kalab/Sidebar"
import Pdf from "../../../../components/elements/Pdf"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function DetailDisposisiKalab (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenKalab');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 

      const {nama_surat} = useParams()

    return (
        <>
        <SidebarKalab profile={'/kalab/profile'} nama_kalab={'Kepala Laboratorium'}>
            <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span className="text-red">.pdf</span>)</p>
                    <Pdf pdfUrl={`/api/fileSuratMahasiswa/${nama_surat}`}/>
            </div>
        </SidebarKalab>
        </>
    )
}