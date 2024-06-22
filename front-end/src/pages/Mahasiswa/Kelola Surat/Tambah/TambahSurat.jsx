import SidebarMhs from "../../../../components/sidebar/Mahasiswa/Sidebar"
import TambahSuratContent from "./TambahSuratContent"

export default function TambahSurat (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <TambahSuratContent/>
        </SidebarMhs>
        </>
    )
}