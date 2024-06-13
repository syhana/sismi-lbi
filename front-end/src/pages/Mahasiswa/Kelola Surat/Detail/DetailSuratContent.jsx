import Input from "../../../../components/input/input"
import Pdf from "../../../../components/elements/Pdf"

export default function DetailSuratContent (){
    return (
        <>
        <div className="p-10 ps-12">
                 <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} disabled={'true'} value={'Surat Peminjaman Ruangan'}/>
                <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf</span></p>
                <Pdf pdfUrl={`/fileSuratMahasiswa/1916-5504-1-PB.pdf`}/>
        </div>
        </>
    )
}