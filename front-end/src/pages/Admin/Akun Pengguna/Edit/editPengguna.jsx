import Sidebar from '../../../../components/sidebar/Sidebar'
import AkunEditContent from './akunEditContent'

export default function EditPengguna (){
    return (
        <>
            <Sidebar profile={'/admin/profile'}>
                <AkunEditContent/>
            </Sidebar> 
        </>
    )
}