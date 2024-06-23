import Input from "../../input/input";
import InputSelect from '../../input/inputSelect';
import ButtonSimple from "../../../components/button/button";
import { useState, useEffect } from "react";
import DataBarangTersedia from "../../../api/mahasiswa/Generate Surat/DataBarangTersedia";
import GeneratePinjamBarang from "../../../api/mahasiswa/Generate Surat/GeneratePinjamBarang";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormPinjamBarang() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [selectBarang, setSelectBarang] = useState(null);
    const [nama_generate, setNama] = useState('');
    const [tanggal_peminjaman_barang, setTgl] = useState('');
    const [keperluan_peminjaman_barang, setKeperluan] = useState('');
    const {idJenis} = useParams()

    useEffect(() => {
        const fetchDataBarang = async () => {
            try {
                const response = await DataBarangTersedia();
                if (response.success) {
                    const formattedData = response.data.map((item) => ({
                        id: item.id_barang,
                        name: item.nama_barang,
                    }));
                    setData(formattedData);
                    if (formattedData.length > 0) {
                        setSelectBarang(formattedData[0]);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nama_generate || !tanggal_peminjaman_barang || !keperluan_peminjaman_barang || !selectBarang) {
            Swal.fire({
                icon: 'error',
                text: 'Semua field harus diisi!',
            });
            return;
        }

        const dataBarang = [{ dataBarang: selectBarang.id }];
        const data = {
            nama_generate,
            keperluan_peminjaman_barang,
            tanggal_peminjaman_barang,
            id_barang: dataBarang
        };

        try {
            await GeneratePinjamBarang(data, idJenis);
            Swal.fire({
                icon: 'success',
                text: 'Surat berhasil digenerate',
            });
            navigate('/mahasiswa/generateSurat')
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                text: 'Terjadi kesalahan saat generate surat',
            });
        }
    };

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-10">
            <p className="text-primary font-semibold text-3xl mb-8">Surat Peminjaman Barang</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Input label={'Nama Surat'} name={'nama_generate'} placeholder={'Masukkan nama surat anda'} type={'text'} className={'text-secondary font-bold text-xl'} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div className="mb-6">
                    {data.length > 0 && (
                        <InputSelect
                            data={data}
                            defaultValue={selectBarang}
                            label={'Barang yang Dipinjam'}
                            classLabel={'text-secondary font-bold text-xl pb-2'}
                            onChange={setSelectBarang}
                        />
                    )}
                </div>
                <div className="mb-6">
                    <Input label={'Tanggal Peminjaman Barang'} name={'tanggal_peminjaman_barang'} placeholder={'Pilih tanggal peminjaman Anda'} type={'date'} className={'text-secondary font-bold text-xl'} onChange={(e) => setTgl(e.target.value)} />
                </div>
                <div className="mb-6">
                    <Input label={'Keperluan Peminjaman Barang'} name={'keperluan_peminjaman_barang'} placeholder={'Masukkan keperluan peminjaman Anda'} type={'text'} className={'text-secondary font-bold text-xl'} onChange={(e) => setKeperluan(e.target.value)} />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} label={'Generate Surat'} type={'submit'} />
                </div>
            </form>
        </div>
    )
}
