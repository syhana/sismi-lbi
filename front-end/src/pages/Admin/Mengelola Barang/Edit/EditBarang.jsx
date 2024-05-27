import Sidebar from '../../../../components/sidebar/Sidebar'
import EditBarangContent from './EditBarangContent'

export default function EditBarang (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <EditBarangContent/>
        </Sidebar>
        </>
    )
}