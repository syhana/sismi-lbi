import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import FormPermohonanTA from "../../../components/form/Mahasiswa/FormPermohonanTA"

export default function PermohonanTA (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <FormPermohonanTA/>
        </SidebarMhs>

        </>
    )
}