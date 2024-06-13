import SidebarAsisten from "../../../../components/sidebar/Asisten/Sidebar"
import FormEditMyDisposisi from "../../../../components/form/Asisten/FormEditMyDisposisi"

export default function EditMyDisposisi (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
            <div className="p-10">
                <p className="font-semibold text-primary text-3xl pb-10">Edit Disposisi</p>
                <FormEditMyDisposisi/>
            </div>
        </SidebarAsisten>
        </>
    )
}