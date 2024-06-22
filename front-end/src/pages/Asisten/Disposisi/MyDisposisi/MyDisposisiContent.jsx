import ButtonIcon from "../../../../components/button/buttonIcon";
import TabelMyDisposisi from "../../../../components/table/TabelMyDisposisi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListMyDisposisi from "../../../../api/Asisten/My Disposisi/ListMyDisposisi";
import Swal from "sweetalert2";

export default function MyDisposisiContent (){
    const navigate = useNavigate();

    const handleTambahDataClick = () => {
        navigate("/asisten/disposisiSurat/myDisposisi/tambah");
    };

    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "tujuan_disposisi", label: "Tujuan Disposisi" },
        { key: "status_disposisi", label: "Status Disposisi" },
        { key: "action", label: "Aksi" },
    ];

    const [data,setData] = useState([])

    useEffect(() => async () => {
        const fetchData = async () => {
            try {
                const response = await ListMyDisposisi()
                if (response.success) {
                    const formattedData = response.data.map((item, index) => ({
                        no: index + 1,
                        nama_surat: item.dataSuratKeluar.nama_surat_keluar,
                        tujuan_disposisi: item.tujuan_disposisi,
                        status_disposisi: item.status_disposisi,
                        id: item.id_disposisi
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
            }
        }
        fetchData()
    }, [])

    return (
        <>
        <div className="p-10 ps-12">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <p className='text-primary font-semibold text-3xl mb-5 md:mb-0'>My Disposisi</p>
                <ButtonIcon
                    icon={'/public/icon/material-symbols--add.svg'}
                    label={'Tambah Disposisi'}
                    className={'bg-primary'}
                    type={'button'}
                    onClick={handleTambahDataClick}
                />
            </div>
            <TabelMyDisposisi bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onEdit={`/asisten/disposisiSurat/myDisposisi/edit`} />
        </div>
        </>
    )
}