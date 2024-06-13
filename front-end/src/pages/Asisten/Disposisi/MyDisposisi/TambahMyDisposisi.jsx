import SidebarAsisten from "../../../../components/sidebar/Asisten/Sidebar"
import FormTambahDisposAsis from "../../../../components/form/Asisten/FormTambahDispoAsisten"

export default function TambahMyDisposisi (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
            <div className="p-10">
                <p className="font-semibold text-primary text-3xl pb-10">Tambah Disposisi</p>
                <FormTambahDisposAsis/>
            </div>
        </SidebarAsisten>
        </>
    )
}