import Input from "../../input/input";
import ButtonSimple from "../../../components/button/button";
import { useState } from "react";
import { GeneratePermohonTA } from "../../../api/mahasiswa/Generate Surat/GeneratePermohonTA";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function FormPermohonanTA (){
    const navigate = useNavigate();
    const [nama_generate, setNama] = useState('')
    const { idJenis } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('tokenMhs');
            if (!token) {
                navigate('/notAllowed');
                return;
            }
            await GeneratePermohonTA(nama_generate, idJenis, token)

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
        <>
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-10">
            <p className="text-primary font-semibold text-3xl mb-8">Surat Permohonan Pengerjaan TA</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Input label="Nama Surat" name="nama_generate" placeholder="Masukkan nama surat anda" type="text" className="text-secondary font-bold text-xl" value={nama_generate} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} label={'Generate Surat'} type={'submit'} />
                </div>
            </form>
        </div>
        </>
    )
}