import SidebarMhs from "../../../../components/sidebar/Mahasiswa/Sidebar"
import DetailSuratContent from "./DetailSuratContent"
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function DetailSurat (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenMhs');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Mahasiswa'} profile={'/mahasiswa/profile'}>
            <DetailSuratContent/>
        </SidebarMhs>
        </>
    )
}