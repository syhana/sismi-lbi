import InputSelect from '../../../../components/input/inputSelect';
import ButtonSimple from '../../../button/button';
import { useState, useEffect } from "react";
import DataSuratMahasiswa from '../../../../api/mahasiswa/Disposisi Surat/DataSuratMahasiswa';
import Swal from 'sweetalert2';
import TambahDisposisiMhs from '../../../../api/mahasiswa/Disposisi Surat/TambahDisposisiMhs';
import { useNavigate } from 'react-router-dom';

export default function FormTambahDisposisiMhs() {
    const [dataFileSurat, setDataFileSurat] = useState([]);
    const [selectFileSurat, setFileSurat] = useState(null);

    const dataTujuan = [
        {
            id: 'Kepala Laboratorium',
            name: 'Kepala Laboratorium',
        },
        {
            id: 'Koordinator Asisten',
            name: 'Koordinator Asisten',
        },
    ];

    const [selectedTujuan, setSelectedTujuan] = useState(dataTujuan[0].id);

    useEffect(() => {
        const fetchDataBarang = async () => {
            try {
                const response = await DataSuratMahasiswa();
                if (response.success) {
                    const formattedData = response.data.map((item) => ({
                        id: item.id_surat_mahasiswa,
                        name: item.nama_surat_mahasiswa,
                    }));
                    setDataFileSurat(formattedData);
                    if (formattedData.length > 0) {
                        setFileSurat(formattedData[0].id);
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

        fetchDataBarang();
    }, []);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('tokenMhs');
            if (!token) {
                navigate('/notAllowed');
                return;
            }

            const results = await TambahDisposisiMhs(selectFileSurat, selectedTujuan); // Use the id values
            if (results.success) {
                Swal.fire({
                    icon: 'success',
                    text: results.message
                });
                navigate('/mahasiswa/disposisiSurat');
            } else {
                Swal.fire({
                    icon: 'error',
                    text: results.message
                });
            }

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                text: 'Terjadi kesalahan saat menambah disposisi',
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    {dataFileSurat.length > 0 && (
                        <InputSelect
                            data={dataFileSurat}
                            defaultValue={selectFileSurat}
                            label={'File Surat'}
                            classLabel={'text-secondary font-bold text-xl pb-2'}
                            onChange={(selectedOption) => setFileSurat(selectedOption.id)}
                        />
                    )}
                </div>
                <div className="mb-6">
                    <InputSelect 
                        data={dataTujuan} 
                        defaultValue={selectedTujuan} 
                        label={'Tujuan Disposisi'} 
                        classLabel={'text-secondary font-bold text-xl pb-2'} 
                        onChange={(selectedOption) => setSelectedTujuan(selectedOption.id)} 
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
