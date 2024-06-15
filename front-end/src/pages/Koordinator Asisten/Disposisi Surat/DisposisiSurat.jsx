import SidebarKoor from "../../../components/sidebar/Koor/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"

export default function DisposisiSuratKoor (){
    return (
        <>
        <SidebarKoor nama_koor={'Nadini Annisa Byant'} profile={'/koor/profile'}>
            <DisposisiSuratContent/>
        </SidebarKoor>
        </>
    )
}