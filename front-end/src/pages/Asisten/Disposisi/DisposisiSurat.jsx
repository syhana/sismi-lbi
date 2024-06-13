import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import DisposisiSuratContent from "./DisposisiSuratContent"

export default function DisposisiSuratAsisten (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
            <DisposisiSuratContent/>
        </SidebarAsisten>
        </>
    )
}