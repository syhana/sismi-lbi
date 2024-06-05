import SidebarMhs from "../../../../components/sidebar/Mahasiswa/Sidebar"
import EditDisposisiContent from "./EditDisposisiContent"

export default function EditDisposisi (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <EditDisposisiContent/>
        </SidebarMhs>
        </>
    )
}