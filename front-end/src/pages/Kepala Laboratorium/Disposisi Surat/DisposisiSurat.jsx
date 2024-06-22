import SidebarKalab from "../../../components/sidebar/Kalab/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function DisposisiSuratKalab (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenKalab');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    return (
        <>
        <SidebarKalab profile={'/kalab/profile'} nama_kalab={'Kepala Laboratorium'}>
            <DisposisiSuratContent/>
        </SidebarKalab>
        </>
    )
}