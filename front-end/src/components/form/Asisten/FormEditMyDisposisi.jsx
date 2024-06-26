import Input from '../../input/input';
import ButtonSimple from '../../button/button';
import InputSelect from '../../../components/input/inputSelect';
import DetailDisposisi from '../../../api/Asisten/Disposisi Surat/DetailDisposisi';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditMyDisposisi from '../../../api/Asisten/My Disposisi/EditMyDisposisi';
import Swal from 'sweetalert2';

export default function FormEditMyDisposisi() {
    const [namaSurat, setNamaSurat] = useState('');
    const [tujuanDisposisi, setTujuanDisposisi] = useState('');
    const [detail, setDetail] = useState(null);
    const { id_disposisi } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await DetailDisposisi(id_disposisi);
                if (response.success) {
                    setDetail(response.data);
                    const suratData = response.data.dataSuratMhs || response.data.dataSuratKeluar;
                    setNamaSurat(suratData?.nama_surat_mahasiswa || suratData?.nama_surat_keluar);
                    setTujuanDisposisi(response.data.tujuan_disposisi);
                } else {
                    console.log("Error fetching detail:", response.message);
                }
            } catch (error) {
                console.log("Error fetching detail:", error);
            }
        };

        fetchDetail();
    }, [id_disposisi]);

    if (!detail) {
        return <p>Loading...</p>;
    }

    const dataTujuan = [
        { id: 'Kepala Laboratorium', name: 'Kepala Laboratorium' },
        { id: 'Koordinator Asisten', name: 'Koordinator Asisten' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await EditMyDisposisi(id_disposisi, tujuanDisposisi);
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
                title: 'Error',
                text: error.message,
            });
        }
    };

    return (
        <>
            <form className="" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Input 
                        label={'File Surat'} 
                        name={'nama_surat'} 
                        value={namaSurat} 
                        disabled={true} 
                        type={'text'} 
                        className={'text-secondary font-bold text-xl'} 
                    />
                </div>
                <div className="mb-6">
                    <InputSelect 
                        data={dataTujuan} 
                        defaultValue={dataTujuan.find(item => item.id === tujuanDisposisi) || dataTujuan[0]} 
                        label={'Tujuan Disposisi'} 
                        classLabel={'text-secondary font-bold text-xl pb-2'} 
                        onChange={(item) => setTujuanDisposisi(item.id)}
                    />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple 
                        className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} 
                        label={'Edit Disposisi'} 
                        type={'submit'} 
                    />
                </div>
            </form>
        </>
    );
}
