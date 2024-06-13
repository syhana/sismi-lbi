import SidebarAsisten from "../../../../components/sidebar/Asisten/Sidebar"
import MyDisposisiContent from "./MyDisposisiContent"

export default function MyDisposisi (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byatn'}>
            <MyDisposisiContent/>
        </SidebarAsisten>
        </>
    )
}