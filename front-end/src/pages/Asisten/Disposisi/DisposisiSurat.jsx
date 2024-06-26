import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function DisposisiSuratAsisten (){
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
            <DisposisiSuratContent/>
        </SidebarAsisten>
        </>
    )
}