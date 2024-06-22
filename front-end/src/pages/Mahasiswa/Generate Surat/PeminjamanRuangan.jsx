import SidebarMhs from "../../../components/sidebar/Mahasiswa/Sidebar"
import FormPinjamRuang from "../../../components/form/Mahasiswa/FormPinjamRuang"

export default function PeminjamanRuangan(){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <FormPinjamRuang/>
        </SidebarMhs>
        </>
    )
}