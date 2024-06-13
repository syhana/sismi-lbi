import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import SuratKeluarContent from "./SuratKeluarContent"

export default function SuratKeluar (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
            <SuratKeluarContent/>
        </SidebarAsisten>
        </>
    )
}