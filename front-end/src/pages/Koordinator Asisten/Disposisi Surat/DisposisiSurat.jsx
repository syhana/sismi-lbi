import SidebarKoor from "../../../components/sidebar/Koor/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function DisposisiSuratKoor (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    return (
        <>
        <SidebarKoor nama_koor={'Koordinator Asisten'} profile={'/koor/profile'}>
            <DisposisiSuratContent/>
        </SidebarKoor>
        </>
    )
}