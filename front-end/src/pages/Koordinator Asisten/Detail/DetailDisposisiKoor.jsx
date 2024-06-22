import SidebarKoor from "../../../components/sidebar/Koor/Sidebar"
import Pdf from "../../../components/elements/Pdf"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function DetailDisposisiKoor (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    
      const {nama_surat} = useParams()
    return (
        <>
        <SidebarKoor profile={'/koor/profile'} nama_koor={'Koordinator Asisten'} >
            <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span className="text-red">.pdf</span>)</p>
                    <Pdf pdfUrl={`/api/fileSuratMahasiswa/${nama_surat}`}/>
            </div>
        </SidebarKoor>
        </>
    )
}