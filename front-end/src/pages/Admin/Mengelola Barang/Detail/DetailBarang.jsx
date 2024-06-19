import Sidebar from '../../../../components/sidebar/Sidebar'
import DetailBarangContent from './DetailBarangContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function DetailBarang (){
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
            <DetailBarangContent/>
        </Sidebar>
        </>
    )
}