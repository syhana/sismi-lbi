import SidebarKoor from "../../../components/sidebar/Koor/Sidebar"
import Pdf from "../../../components/elements/Pdf"

export default function DetailDisposisiKoor (){
    return (
        <>
        <SidebarKoor profile={'/koor/profile'} nama_koor={'Nadini Annisa Byant'}>
            <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span className="text-red">.pdf</span>)</p>
                    <Pdf pdfUrl={`/fileSuratMahasiswa/1916-5504-1-PB.pdf`}/>
            </div>
        </SidebarKoor>
        </>
    )
}