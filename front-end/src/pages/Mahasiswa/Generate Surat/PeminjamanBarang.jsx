import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import FormPinjamBarang from "../../../components/form/Mahasiswa/FormPinjamBarang"

export default function PeminjamanBarang(){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <FormPinjamBarang/>
        </SidebarMhs>
        </>
    )
}