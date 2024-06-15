import TabelDisposisiKalab from "../../../components/table/TabelDisposisiKalab"

export default function DisposisiSuratContent (){
    const data = [
        { id: 1, nama_surat: "Surat Peminjaman Ruangan", pengirim: 'nadini annisa', status_disposisi:'TTD Kalab'},
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
            <TabelDisposisiKalab bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onView={'/kalab/disposisiSurat/detail'} onTTD={'/kalab/disposisiSurat/ttd'} />
        </div>
        </>
    )
}