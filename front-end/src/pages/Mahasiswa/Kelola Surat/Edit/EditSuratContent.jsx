import Input from "../../../../components/input/input"
import Pdf from "../../../../components/elements/Pdf"
import InputFile from "../../../../components/input/inputFile"
import ButtonSimple from "../../../../components/button/button"

export default function EditSuratContent (){
    return (
        <>
        <div className="p-10 ps-12">
            <form action="">
                <p className="text-primary font-bold text-3xl">Edit Surat</p>
                <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} placeholder={'Surat Peminjaman Ruangan Nadini'}/>
                {/* <p className="pt-5 pb-5 font-bold text-xl text-secondary">File Surat (.<span className="text-red">pdf</span>)</p>
                <UploadFile label={'Klik untuk tambah file'} icon={'/public/add file.svg'} classLabel={'text-secondary'}/> */}
                <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf</span></p>
                <Pdf pdfUrl={`/fileSuratMahasiswa/1916-5504-1-PB.pdf`}/>
                <InputFile  placeholder={'Klik pilih untuk memilih surat'}/>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary font-semibold text-base text-white'} label={'Simpan Surat'} type={'submit'}/>
                </div>
            </form>
            
        </div>
        </>
    )
}