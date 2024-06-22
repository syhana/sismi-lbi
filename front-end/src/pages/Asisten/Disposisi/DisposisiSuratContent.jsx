import { useNavigate } from "react-router-dom";
import ButtonSimple from "../../../components/button/button";
import TabelDisposisiAsisten from "../../../components/table/TabelDisposisiAsisten";
import { useEffect, useState } from "react";
import TampilDisposisiSurat from "../../../api/Asisten/Disposisi Surat/TampilDisposisiSurat";

export default function DisposisiSuratContent() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const hanldeMyDisposisi = () => {
        navigate("/asisten/disposisiSurat/myDisposisi");
    };

    const columns = [
        { key: "no", label: "No" },
        { key: "nama_surat", label: "Nama Surat" },
        { key: "pengirim", label: "Pengirim" },
        { key: "status_disposisi", label: "Status Disposisi" },
        { key: "action", label: "Aksi" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TampilDisposisiSurat();
                if (response && response.data) {
                    const formattedData = response.data.map((item, index) => {
                        const suratData = item.dataSuratMhs || item.dataSuratKeluar;
                        const namaSurat = suratData?.file_surat_mahasiswa || suratData?.file_surat_keluar;
                        const pengirim = item.dataDisposisiPemberi?.nama_mahasiswa || item.dataSuratKeluar?.dataAsisten?.nama_asisten;

                        return {
                            no: index + 1,
                            nama_surat: namaSurat,
                            pengirim: pengirim,
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
                    <ButtonSimple className={'bg-primary'} type={'button'} label={'My Disposisi'} onClick={hanldeMyDisposisi}/>
                </div>
                <TabelDisposisiAsisten bg_head={'bg-biruComplement'} className={'mt-10'} columns={columns} data={data} onView={'/asisten/disposisiSurat/detail'} />
            </div>
        </>
    );
}
