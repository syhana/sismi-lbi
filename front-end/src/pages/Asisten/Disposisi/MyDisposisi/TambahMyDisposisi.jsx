import SidebarAsisten from "../../../../components/sidebar/Asisten/Sidebar"
import FormTambahDisposAsis from "../../../../components/form/Asisten/FormTambahDispoAsisten"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function TambahMyDisposisi (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 
      
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Asisten'}>
            <div className="p-10">
                <p className="font-semibold text-primary text-3xl pb-10">Tambah Disposisi</p>
                <FormTambahDisposAsis/>
            </div>
        </SidebarAsisten>
        </>
    )
}