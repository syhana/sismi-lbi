import { useNavigate } from "react-router-dom";
import ButtonIcon from '../../../components/button/buttonIcon'
import Tabel from '../../../components/table/TabelSuratMhs'
import { useState, useEffect } from "react";
import TampilSuratMhs from "../../../api/mahasiswa/Kelola Surat/TampilSuratMhs";
import Swal from "sweetalert2";

export default function KelolaSuratContent (){
    const [data,setData] = useState([])    
    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "file_surat", label: "File Surat" },
        { key: "action", label: "Aksi" },
    ];

    const navigate = useNavigate();



    useEffect(() => async () => {
        const fetchData = async () => {
            try {
                const response = await TampilSuratMhs()
                if (response.success) {
                    const formattedData = response.data.map((item, index) => ({
                        no: index + 1,
                        nama_surat: item.nama_surat_mahasiswa,
                        file_surat: item.file_surat_mahasiswa,
                        id: item.id_surat_mahasiswa
                    }))
                    setData(formattedData)
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: response.message,
                      });
                }
            } catch (error) {
                console.log("Error fetching data", error)
                Swal.fire({
                    icon: 'error',
                    text: error.message,
                });
            }
        }
        fetchData()
    }, [])

    const handleTambahDataClick = () => {
        navigate("/mahasiswa/kelolaSurat/tambah");
    };

    return (
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Semua Surat</p>
                <ButtonIcon
                    icon={'/icon/material-symbols--add.svg'}
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
