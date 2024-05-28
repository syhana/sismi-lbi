import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import GenerateSuratContent from "./GenerateSuratContent"

export default function GenerateSurat(){
    return (
        <>
        <SidebarMhs profile={'/mahasiswa/profile'} nama_mahasiswa={'Nadini Annisa Byant'}>
            <GenerateSuratContent/>
        </SidebarMhs>
        </>
    )
}