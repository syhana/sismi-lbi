import Sidebar from '../../../components/sidebar/Sidebar'
import ProfileContent from './ProfileContent'

export default function Profile (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <ProfileContent/>
        </Sidebar>
        </>
    )
}