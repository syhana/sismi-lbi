import SidebarMhs from "../../../../components/sidebar/Mahasiswa/Sidebar"
import TambahDiposisiContent from "./TambahDiposisiContent"

export default function TambahDisposisi (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <TambahDiposisiContent/>
        </SidebarMhs>
        </>
    )
}