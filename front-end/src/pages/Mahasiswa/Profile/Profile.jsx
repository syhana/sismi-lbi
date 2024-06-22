import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import ProfileContent from "./ProfileContent"

export default function Profile (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <ProfileContent/>
        </SidebarMhs>
        </>
    )
}