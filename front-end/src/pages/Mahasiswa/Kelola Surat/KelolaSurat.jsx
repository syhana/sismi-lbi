import SidebarMhs from '../../../components/sidebar/Mahasiswa/Sidebar'
import KelolaSuratContent from './KelolaSuratContent'

export default function KelolaSurat (){
    return (
        <>
        <SidebarMhs nama_mahasiswa={'Nadini Annisa Byant'} profile={'/mahasiswa/profile'}>
            <KelolaSuratContent/>
        </SidebarMhs>
        </>
    )
}