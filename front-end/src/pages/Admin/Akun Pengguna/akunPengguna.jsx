import Sidebar from '../../../components/sidebar/Sidebar'
import AkunContent from './akunContent'

export default function AkunPengguna (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <AkunContent/>
        </Sidebar>
        </>
    )
}