import Sidebar from '../../../../components/sidebar/Sidebar'
import AkunEditContent from './akunEditContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditPengguna (){
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
                <AkunEditContent/>
            </Sidebar> 
        </>
    )
}