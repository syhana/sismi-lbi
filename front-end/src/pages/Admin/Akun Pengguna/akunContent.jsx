import { useNavigate } from "react-router-dom";
import ButtonIcon from '../../../components/button/buttonIcon'
import Tabel from '../../../components/table/TabelAkunAdmin'

const data = [
    { id: 1, name: "Arif Wahyudi", role: "Asisten" },
    { id: 2, name: "Arif", role: "Kepala Laboratorium" },
    { id: 3, name: "Wahyu", role: "Asisten" },
];

const columns = [
    { key: "no", label: "No" },
    { key: "name", label: "Nama" },
    { key: "role", label: "Role" },
    { key: "action", label: "Aksi" },
];

export default function AkunContent (){
    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/admin/akunPengguna/tambah");
    };

    return (
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Akun Pengguna</p>
                <ButtonIcon
                    icon={'/public/icon/material-symbols--add.svg'}
                    label={'Tambah Data'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <Tabel bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={`/admin/akunPengguna/edit`} onView={'/admin/akunPengguna/detail'} />
        </div>
    );
}
