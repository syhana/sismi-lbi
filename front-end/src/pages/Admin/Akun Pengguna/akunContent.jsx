import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonIcon from '../../../components/button/buttonIcon';
import Tabel from '../../../components/table/TabelAkunAdmin';
import DataAKunPengguna from "../../../api/admin/Akun Pengguna/dataAkunPengguna";

export default function AkunContent() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DataAKunPengguna();
                const formattedData = response.data.map((item, index) => ({
                    no: index + 1,
                    name: item.nama_asisten || item.nama_kalab,
                    role: item.dataRole ? item.dataRole.nama_role : "Kepala Laboratorium", 
                    id: item.id_asisten || item.nip_kalab
                }));
                setData(formattedData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleTambahDataClick = () => {
        navigate("/admin/akunPengguna/tambah");
    };

    const columns = [
        { key: "no", label: "No" },
        { key: "name", label: "Nama" },
        { key: "role", label: "Role" },
        { key: "action", label: "Aksi" }
    ];

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
            <Tabel
                bg_head={'bg-biruComplement'}
                className={'mt-10'}
                columns={columns}
                data={data}
                onEdit={`/admin/akunPengguna/edit`}
                onView={'/admin/akunPengguna/detail'}
            />
        </div>
    );
}
