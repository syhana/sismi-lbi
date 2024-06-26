import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import GenerateSuratContent from "./GenerateSuratContent"
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function GenerateSurat(){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenMhs');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
      
    return (
        <>
        <SidebarMhs profile={'/mahasiswa/profile'} nama_mahasiswa={'Mahasiswa'}>
            <GenerateSuratContent/>
        </SidebarMhs>
        </>
    )
}