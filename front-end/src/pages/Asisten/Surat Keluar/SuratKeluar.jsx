import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import SuratKeluarContent from "./SuratKeluarContent"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function SuratKeluar (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Asisten'}>
            <SuratKeluarContent/>
        </SidebarAsisten>
        </>
    )
}