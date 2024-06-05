import Input from "../../../../components/input/input"
import UploadFile from '../../../../components/input/uploadFile'

export default function TambahSuratContent (){
    return (
        <>
        <div className="p-10 ps-12">
            <p className="text-primary font-bold text-3xl">Tambah Surat</p>
            <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} placeholder={'Masukan nama surat Anda'}/>
            <p className="pt-5 pb-5 font-bold text-xl text-secondary">File Surat (.<span className="text-red">pdf</span>)</p>
            <UploadFile label={'Klik untuk tambah file'} icon={'/public/add file.svg'} classLabel={'text-secondary'}/>
        </div>
        </>
    )
}