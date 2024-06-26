import SidebarAsisten from "../../../../components/sidebar/Asisten/Sidebar"
import FormEditMyDisposisi from "../../../../components/form/Asisten/FormEditMyDisposisi"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function EditMyDisposisi (){
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
                <p className="font-semibold text-primary text-3xl pb-10">Edit Disposisi</p>
                <FormEditMyDisposisi/>
            </div>
        </SidebarAsisten>
        </>
    )
}