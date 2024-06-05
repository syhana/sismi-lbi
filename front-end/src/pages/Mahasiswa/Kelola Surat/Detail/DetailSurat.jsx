import SidebarMhs from "../../../../components/sidebar/Mahasiswa/Sidebar"
import DetailSuratContent from "./DetailSuratContent"

export default function DetailSurat (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <DetailSuratContent/>
        </SidebarMhs>
        </>
    )
}