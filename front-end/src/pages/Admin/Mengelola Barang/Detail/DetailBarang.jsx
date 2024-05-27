import Sidebar from '../../../../components/sidebar/Sidebar'
import DetailBarangContent from './DetailBarangContent'

export default function DetailBarang (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <DetailBarangContent/>
        </Sidebar>
        </>
    )
}