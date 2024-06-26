import Sidebar from '../../../../components/sidebar/Sidebar'
import DetailContent from './DetailContent'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DetailPengguna (){
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
            <DetailContent/>
        </Sidebar>
        </>
    )
}