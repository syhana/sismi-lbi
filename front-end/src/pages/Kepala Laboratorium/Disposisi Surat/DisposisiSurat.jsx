import SidebarKalab from "../../../components/sidebar/Kalab/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"

export default function DisposisiSuratKalab (){
    return (
        <>
        <SidebarKalab profile={'/kalab/profile'} nama_kalab={'Nadini Annisa Byant'}>
            <DisposisiSuratContent/>
        </SidebarKalab>
        </>
    )
}