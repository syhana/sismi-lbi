import { useEffect, useState } from "react";
import ButtonIcon from "../../../components/button/buttonIcon"
import TabelSuratMasuk from "../../../components/table/TabelSuratMasuk"
import { useNavigate } from "react-router-dom";
import TampilSuratMasuk from "../../../api/Asisten/Kelola Surat Masuk/TampilSuratMasuk";

export default function SuratMasukContent (){    
    const [data, setData] = useState([])


    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "file_surat", label: "File Surat" },
        { key: "action", label: "Aksi" },
    ];

    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/asisten/suratMasuk/tambah");
    };
    
    useEffect(() => async () => {
        const fetchData = async () => {
            try {
                const response = await TampilSuratMasuk()
                const formattedData = response.data.map((item, index) => ({
                    no: index + 1,
                    nama_surat: item.nama_surat_masuk,
                    file_surat: item.file_surat_masuk,
                    id: item.no_surat_masuk
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
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>Surat Masuk</p>
                <ButtonIcon
                    icon={'/public/icon/material-symbols--add.svg'}
                    label={'Tambah Surat'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <TabelSuratMasuk bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={`/asisten/suratMasuk/edit`} onView={'/asisten/suratMasuk/detail'} />
        </div>
        </>
    )
}