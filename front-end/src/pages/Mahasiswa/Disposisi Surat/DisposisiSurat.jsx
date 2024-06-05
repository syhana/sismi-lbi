import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"

export default function DisposisiSurat (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <DisposisiSuratContent/>
        </SidebarMhs>
        </>
    )
}