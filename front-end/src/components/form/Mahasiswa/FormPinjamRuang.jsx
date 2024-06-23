import Input from "../../input/input";
import ButtonSimple from "../../../components/button/button";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { GeneratePinjamRuang } from "../../../api/mahasiswa/Generate Surat/GeneratPinjamRuang";

export default function FormPinjamRuang() {
    const navigate = useNavigate();
    const [nama_generate, setNama] = useState("");
    const [tanggal_peminjaman_ruangan, setTglPinjam] = useState("");
    const [waktu_peminjaman_ruangan, setWaktuPinjam] = useState("");
    const [keperluan_peminjaman_ruangan, setKeperluanPinjam] = useState("");
    const { idJenis } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('tokenMhs');
            if (!token) {
                navigate('/notAllowed');
                return;
            }
            await GeneratePinjamRuang(nama_generate, keperluan_peminjaman_ruangan, tanggal_peminjaman_ruangan, waktu_peminjaman_ruangan, idJenis, token)

            Swal.fire({
                icon: 'success',
                text: 'Surat berhasil digenerate',
            });

            navigate('/mahasiswa/generateSurat')

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                text: 'Nama Generate sudah digunakan, gunakan penamaan lain',
            });
        }
    };

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-10">
            <p className="text-primary font-semibold text-3xl mb-8">Surat Peminjaman Ruangan</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Input label="Nama Surat" name="nama_generate" placeholder="Masukkan nama surat anda" type="text" className="text-secondary font-bold text-xl" value={nama_generate} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div className="mb-6">
                    <Input label="Tanggal Peminjaman Ruangan" name="tanggal_peminjaman_ruangan" placeholder="Pilih tanggal peminjaman Anda" type="date" className="text-secondary font-bold text-xl" value={tanggal_peminjaman_ruangan} onChange={(e) => setTglPinjam(e.target.value)} />
                </div>
                <div className="mb-6">
                    <Input label="Waktu Peminjaman Ruangan" name="waktu_peminjaman_ruangan" placeholder="Pilih waktu peminjaman Anda" type="time" className="text-secondary font-bold text-xl" value={waktu_peminjaman_ruangan} onChange={(e) => setWaktuPinjam(e.target.value)} />
                </div>
                <div className="mb-6">
                    <Input label="Keperluan Peminjaman Ruangan" name="keperluan_peminjaman_ruangan" placeholder="Masukkan keperluan peminjaman Anda" type="text" className="text-secondary font-bold text-xl" value={keperluan_peminjaman_ruangan} onChange={(e) => setKeperluanPinjam(e.target.value)} />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className="bg-primary px-6 py-2 md:px-10 md:py-2 text-base" label="Generate Surat" type="submit" />
                </div>
            </form>
        </div>
    );
}
