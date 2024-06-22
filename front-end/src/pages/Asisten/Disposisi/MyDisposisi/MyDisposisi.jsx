import SidebarAsisten from "../../../../components/sidebar/Asisten/Sidebar"
import MyDisposisiContent from "./MyDisposisiContent"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function MyDisposisi (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 

    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byatn'}>
            <MyDisposisiContent/>
        </SidebarAsisten>
        </>
    )
}