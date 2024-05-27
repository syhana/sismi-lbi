import Sidebar from '../../../../components/sidebar/Sidebar'
import DetailContent from './DetailContent'

export default function DetailPengguna (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <DetailContent/>
        </Sidebar>
        </>
    )
}