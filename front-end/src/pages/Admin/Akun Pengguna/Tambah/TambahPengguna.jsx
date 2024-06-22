import Sidebar from '../../../../components/sidebar/Sidebar'
import TambahConten from './TambahContent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function TambahPengguna (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
    return (
        <>
        <Sidebar>
            <TambahConten/>
        </Sidebar>
        </>
    )
}