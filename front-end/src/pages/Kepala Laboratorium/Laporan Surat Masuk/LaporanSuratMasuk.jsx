import SidebarKalab from "../../../components/sidebar/Kalab/Sidebar";
import Input from "../../../components/input/input";
import ButtonSimple from "../../../components/button/button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from "sweetalert2";
import { downloadLaporanSuratMasuk } from "../../../api/Kepala Laboratorium/Laporan Surat/LaporanSuratMasuk";

const LaporanSuratMasuk = () => {
    const navigate = useNavigate();

    const [tanggal_awal, setTanggalAwal] = useState('');
    const [tanggal_akhir, setTanggalAkhir] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('tokenKalab');
            if (!token) {
                navigate('/notAllowed');
                return;
            }

            await downloadLaporanSuratMasuk(tanggal_awal, tanggal_akhir, token);

            Swal.fire({
                icon: 'success',
                text: 'Laporan berhasil diunduh',
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                text: 'Data surat tidak tersedia',
            });
        }
    };

    return (
        <SidebarKalab profile={'/profile/kalab'} nama_kalab={'Kepala Laboratorium'}>
            <div className="p-10 ps-12">
                <p className="text-primary font-bold text-3xl">Laporan Surat Masuk</p>
                <div className="pt-10">
                    <form onSubmit={handleSubmit}>
                        <Input label={'Tanggal awal'} name={'tanggal_awal_masuk'} type={'date'} onChange={(e) => setTanggalAwal(e.target.value)}/>
                        <Input label={'Tanggal Akhir'} name={'tanggal_akhir_masuk'} type={'date'} onChange={(e) => setTanggalAkhir(e.target.value)}/>
                        <div className="flex justify-end pt-10">
                            <ButtonSimple label={'Cetak Laporan'} type={'submit'} className={'bg-primary text-white'}/>
                        </div>
                    </form>
                </div>
            </div>
        </SidebarKalab>
    );
};

export default LaporanSuratMasuk;
