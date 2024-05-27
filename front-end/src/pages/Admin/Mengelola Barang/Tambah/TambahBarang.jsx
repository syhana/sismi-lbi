import Sidebar from '../../../../components/sidebar/Sidebar'
import TambahBarangContent from './TambahBarangContent'

export default function TambahBarang (){
    return (
        <>
        <Sidebar profile={'/admin/profile'}>
            <TambahBarangContent/>
        </Sidebar>
        </>
    )
}