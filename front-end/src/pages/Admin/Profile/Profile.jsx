import Sidebar from '../../../components/sidebar/Sidebar'
import ProfileContent from './ProfileContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Profile (){
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
            <ProfileContent/>
        </Sidebar>
        </>
    )
}