import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import FormPermohonanTA from "../../../components/form/Mahasiswa/FormPermohonanTA"
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function PermohonanTA (){
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
            <FormPermohonanTA/>
        </SidebarMhs>

        </>
    )
}