import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import SuratMasukContent from "./SuratMasukContent"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function SuratMasuk (){
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
            <SuratMasukContent/>
        </SidebarAsisten>
        </>
    )
}