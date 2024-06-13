import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar"
import Input from "../../../components/input/input"
import UploadFile from '../../../components/input/uploadFile'
import ButtonSimple from "../../../components/button/button"

export default function TambahSuratKeluar (){
    return (
        <>
        <SidebarAsisten profile={'/asisten/profile'} nama_asisten={'Nadini Annisa Byant'}>
        <div className="p-10 ps-12">
                <form action="">
                    <p className="text-primary font-bold text-3xl">Tambah Surat Keluar</p>
                    <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_keluar'} placeholder={'Masukan nama surat Anda'}/>
                    <p className="pt-5 pb-5 font-bold text-xl text-secondary">File Surat (.<span className="text-red">pdf</span>)</p>
                    <UploadFile label={'Klik untuk tambah file'} icon={'/public/add file.svg'} classLabel={'text-secondary'}/>
                    <div className="flex justify-end">
                        <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} label={'Tambah Surat'} type={'submit'} />
                    </div>
                </form>
            </div>
        </SidebarAsisten> 
        </>
    )
}