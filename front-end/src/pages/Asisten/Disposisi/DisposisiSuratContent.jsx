import { useNavigate } from "react-router-dom";
import ButtonSimple from "../../../components/button/button";
import TabelDisposisiAsisten from "../../../components/table/TabelDisposisiAsisten"

export default function DisposisiSuratContent (){
    const navigate = useNavigate();

    const hanldeMyDisposisi = () => {
        navigate("/asisten/disposisiSurat/myDisposisi");
    };
    
    const data = [
        { id: 1, nama_surat: "Surat Peminjaman Ruangan", pengirim: 'nadini annisa', status_disposisi:'menunggu'},
        { id: 1, nama_surat: "Surat Peminjaman Ruangan", pengirim: 'nadini annisa', status_disposisi:'TTD Kordas'},
        { id: 1, nama_surat: "Surat Peminjaman Ruangan", pengirim: 'nadini annisa', status_disposisi:'TTD Kalab'},
        { id: 1, nama_surat: "Surat Peminjaman Ruangan", pengirim: 'nadini annisa', status_disposisi:'Selesai'},
    ];
    
    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "pengirim", label: "Pengirim" },
        { key: "status_disposisi", label: "Status Disposisi" },
        { key: "action", label: "Aksi" },
    ];
    return (
        <>
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Semua Disposisi</p>
                <ButtonSimple className={'bg-primary'} type={'button'} label={'My Disposisi'} onClick={hanldeMyDisposisi}/>
            </div>
            <TabelDisposisiAsisten bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onView={'/asisten/disposisiSurat/detail'} />
        </div>
        </>
    )
}