import SidebarMhs from "../../../../components/sidebar/Mahasiswa/Sidebar"
import EditSuratContent from "./EditSuratContent"
export default function EditSurat (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <EditSuratContent/>
        </SidebarMhs>
        </>
    )
}