import Sidebar from '../../../components/sidebar/Sidebar'
import KelolaBarangContent from './KelolaBaranContent'

export default function KelolaBarang (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <KelolaBarangContent/>
        </Sidebar>
        </>
    )
}