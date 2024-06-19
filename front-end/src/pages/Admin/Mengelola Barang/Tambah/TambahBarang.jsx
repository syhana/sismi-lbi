import Sidebar from '../../../../components/sidebar/Sidebar'
import TambahBarangContent from './TambahBarangContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function TambahBarang (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
      
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <TambahBarangContent/>
        </Sidebar>
        </>
    )
}