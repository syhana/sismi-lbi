import TabelDisposisiMhs from "../../../components/table/TabelDisposisiMhs"
import ButtonIcon from "../../../components/button/buttonIcon";
import { useNavigate } from "react-router-dom";
import DataDisposisiMhs from "../../../api/mahasiswa/Disposisi Surat/DataDisposisiMhs";
import { useState, useEffect } from "react";

export default function DisposisiSuratContent (){
    const [data,setData] = useState([])
    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/mahasiswa/disposisiSurat/tambah");
    };
    
    // const data = [
    //     { id: 1, nama_surat: "Surat Peminjaman Ruangan", tujuan_disposisi: 'Surat_peminjaman_nadini.pdf', status_disposisi:'menunggu'},
    //     { id: 1, nama_surat: "Surat Peminjaman Ruangan", tujuan_disposisi: 'Surat_peminjaman_nadini.pdf', status_disposisi:'TTD Kordas'},
    //     { id: 1, nama_surat: "Surat Peminjaman Ruangan", tujuan_disposisi: 'Surat_peminjaman_nadini.pdf', status_disposisi:'TTD Kalab'},
    //     { id: 1, nama_surat: "Surat Peminjaman Ruangan", tujuan_disposisi: 'Surat_peminjaman_nadini.pdf', status_disposisi:'Selesai'},

    
    // ];
    
    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "tujuan_disposisi", label: "Tujuan Disposisi" },
        { key: "status_disposisi", label: "Status Disposisi" },
        { key: "action", label: "Aksi" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DataDisposisiMhs();
                if (response && response.data) {
                    const formattedData = response.data.map((item, index) => {
                        return {
                            no: index + 1,
                            nama_surat: item.dataSuratMhs.nama_surat_mahasiswa,
                            tujuan_disposisi: item.tujuan_disposisi,
                            status_disposisi: item.status_disposisi,
                            id: item.id_disposisi
                        };
                    });
                    setData(formattedData);
                } else {
                    console.log("No data found in response");
                }
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
         <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Semua Disposisi</p>
                <ButtonIcon
                    icon={'/icon/material-symbols--add.svg'}
                    label={'Tambah Disposisi'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <TabelDisposisiMhs bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={`/mahasiswa/disposisiSurat/edit`} onView={'/mahasiswa/kelolaSurat/detail'} />
        </div>
        </>
    )
}