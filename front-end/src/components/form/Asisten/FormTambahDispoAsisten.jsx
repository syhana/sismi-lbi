import { useState, useEffect } from "react";
import InputSelect from '../../../components/input/inputSelect';
import ButtonSimple from '../../button/button';
import ListSuratKeluar from "../../../api/Asisten/My Disposisi/ListSuratKeluar";
import TambahMyDisposisi from "../../../api/Asisten/My Disposisi/TambahMyDisposisi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FormTambahDisposAsis() {
    const navigate = useNavigate();
    const [dataFileSurat, setDataFileSurat] = useState([]);
    const [dataTujuan] = useState([
        { id: 'Kepala Laboratorium', name: 'Kepala Laboratorium' },
        { id: 'Koordinator Asisten', name: 'Koordinator Asisten' },
    ]);
    const [selectedSurat, setSelectedSurat] = useState(null);
    const [selectedTujuan, setSelectedTujuan] = useState(dataTujuan[0]);

    useEffect(() => {
        const fetchSuratKeluar = async () => {
            try {
                const response = await ListSuratKeluar();
                if (response.success) {
                    const formattedData = response.data.map((item) => ({
                        id: item.no_surat_keluar,
                        name: item.nama_surat_keluar,
                    }));
                    setDataFileSurat(formattedData);
                    if (formattedData.length > 0) {
                        setSelectedSurat(formattedData[0]);
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: response.message,
                    });
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchSuratKeluar();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await TambahMyDisposisi(selectedSurat.id, selectedTujuan.id);
            if (response.success) {
                Swal.fire({
                    icon: 'success',
                    text: response.message,
                });
                navigate('/asisten/disposisiSurat/myDisposisi');
            } else {
                Swal.fire({
                    icon: 'error',
                    text: response.message,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: error.message,
            });
        }
    };

    return (
        <>
            <form className="" onSubmit={handleSubmit}>
                <div className="mb-6">
                    {dataFileSurat.length > 0 && (
                        <InputSelect 
                            data={dataFileSurat} 
                            defaultValue={selectedSurat} 
                            label={'File Surat'} 
                            classLabel={'text-secondary font-bold text-xl pb-2'} 
                            onChange={setSelectedSurat}
                        />
                    )}
                </div>
                <div className="mb-6">
                    <InputSelect 
                        data={dataTujuan} 
                        defaultValue={selectedTujuan} 
                        label={'Tujuan Disposisi'} 
                        classLabel={'text-secondary font-bold text-xl pb-2'} 
                        onChange={setSelectedTujuan}
                    />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple 
                        className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} 
                        label={'Tambah Disposisi'} 
                        type={'submit'} 
                    />
                </div>
            </form>
        </>
    );
}
