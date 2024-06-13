import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import SuratMasukContent from "./SuratMasukContent"
export default function SuratMasuk (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
            <SuratMasukContent/>
        </SidebarAsisten>
        </>
    )
}