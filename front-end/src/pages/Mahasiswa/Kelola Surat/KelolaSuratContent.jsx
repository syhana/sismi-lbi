import { useNavigate } from "react-router-dom";
import ButtonIcon from '../../../components/button/buttonIcon'
import Tabel from '../../../components/table/TabelSuratMhs'

const data = [
    { id: 1, nama_surat: "Surat Peminjaman Ruangan", file_surat: 'Surat_peminjaman_nadini.pdf'},
    { id: 1, nama_surat: "Surat Peminjaman Ruangan", file_surat: 'Surat_peminjaman_nadini.pdf'},
    { id: 1, nama_surat: "Surat Peminjaman Ruangan", file_surat: 'Surat_peminjaman_nadini.pdf'},
    { id: 1, nama_surat: "Surat Peminjaman Ruangan", file_surat: 'Surat_peminjaman_nadini.pdf'},

];

const columns = [
    { key: "no", label: "No" },
    { key: "nama_surat", label: "Nama Surat" },
    { key: "file_surat", label: "File Surat" },
    { key: "action", label: "Aksi" },
];

export default function KelolaSuratContent (){
    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/mahasiswa/kelolaSurat/tambah");
    };

    return (
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Semua Surat</p>
                <ButtonIcon
                    icon={'/public/icon/material-symbols--add.svg'}
                    label={'Tambah Surat'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <Tabel bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={`/mahasiswa/kelolaSurat/edit`} onView={'/mahasiswa/kelolaSurat/detail'} />
        </div>
    );
}
