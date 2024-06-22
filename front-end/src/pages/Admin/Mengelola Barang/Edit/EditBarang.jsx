import Sidebar from '../../../../components/sidebar/Sidebar'
import EditBarangContent from './EditBarangContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditBarang (){
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
            <EditBarangContent/>
        </Sidebar>
        </>
    )
}