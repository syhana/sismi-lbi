import Sidebar from '../../../components/sidebar/Sidebar'
import KelolaBarangContent from './KelolaBaranContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function KelolaBarang (){
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
            <KelolaBarangContent/>
        </Sidebar>
        </>
    )
}