import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../../components/button/buttonIcon";
import TabelSuratKeluar from "../../../components/table/TabelSuratKeluar";
import TampilSuratKeluar from "../../../api/Asisten/Kelola Surat Keluar/TampilSuratKeluar";
import { useEffect, useState } from "react";

export default function SuratKeluarContent (){
    const [data, setData] = useState([])
    
    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "file_surat", label: "File Surat" },
        { key: "action", label: "Aksi" },
    ];

    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/asisten/suratKeluar/tambah");
    };
    
    useEffect(() => async () => {
        const fetchData = async () => {
            try {
                const response = await TampilSuratKeluar()
                const formattedData = response.data.map((item, index) => ({
                    no: index + 1,
                    nama_surat: item.nama_surat_keluar,
                    file_surat: item.file_surat_keluar,
                    id: item.no_surat_keluar
                }))
                setData(formattedData)
            } catch (error) {
                console.log("Error fetching data", error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Surat Keluar</p>
                <ButtonIcon
                    icon={'/icon/material-symbols--add.svg'}
                    label={'Tambah Surat'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <TabelSuratKeluar bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={`/asisten/suratKeluar/edit`} onView={'/asisten/suratKeluar/detail'} />
        </div>
        </>
    )
}