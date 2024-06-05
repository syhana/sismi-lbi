import { useNavigate } from "react-router-dom";
import ButtonIcon from '../../../components/button/buttonIcon'
import Tabel from '../../../components/table/TabelBarangAdmin'
import Badges from "../../../components/badges/badges";

const data = [
    {id: 1, nama_barang: 'Kursi Gaming', status_barang: <Badges label={'Tersedia'} className={'bg-tersedia text-white px-6 py-2'}/>},
    {id: 1, nama_barang: 'Kursi Gaming', status_barang: <Badges label={'Tidak Tersedia'} className={'bg-tidakTersedia text-white px-6 py-2'}/>},
    {id: 1, nama_barang: 'Kursi Gaming', status_barang: <Badges label={'Tersedia'} className={'bg-tersedia text-white px-6 py-2'}/>},
];

const columns = [
    { key: "no", label: "No" },
    { key: "nama_barang", label: "Nama Barang" },
    { key: "status_barang", label: "Status Barang" },
    { key: "action", label: "Aksi" },
];

export default function KelolaBaranContent(){
    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/admin/kelolaBarang/tambah");
    };

    return (
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Mengelola Barang</p>
                <ButtonIcon
                    icon={'/public/icon/material-symbols--add.svg'}
                    label={'Tambah Data'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <Tabel bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={'/admin/kelolaBarang/edit'} onView={'/admin/kelolaBarang/detail'} />
        </div>
    );
}
