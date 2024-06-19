import Sidebar from '../../../components/sidebar/Sidebar'
import AkunContent from './akunContent'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AkunPengguna (){
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
            <AkunContent/>
        </Sidebar>
        </>
    )
}