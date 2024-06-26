import React, { useState } from 'react';
import Input from '../input/input';
import InputPass from '../input/inputPass';
import Button from '../button/button';
import InputFile from '../input/inputFile';
import Swal from 'sweetalert2';
import RegisterMahasiswa from '../../api/mahasiswa/resgisMhs';
import { useNavigate } from 'react-router-dom';

export default function FormRegisMhs() {
    const navigate = useNavigate()
    const [nama_mahasiswa, setNamaMahasiswa] = useState('');
    const [nim_mahasiswa, setNimMahasiswa] = useState('');
    const [alamat_mahasiswa, setAlamatMahasiswa] = useState('');
    const [file, setFile] = useState(null);
    const [password_mahasiswa, setPasswordMahasiswa] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await RegisterMahasiswa(nim_mahasiswa, nama_mahasiswa, alamat_mahasiswa, password_mahasiswa, file);
            if(result.success){
                Swal.fire({
                    icon: 'success',
                    text: result.message
                });
                navigate('/loginMahasiswa')
            } else {
                Swal.fire({
                    icon: 'error',
                    text: result.message
                });
            }
        } catch (error) {
            console.error('Error during registration:', error);
            Swal.fire({
                icon: 'error',
                text: 'Terjadi kesalahan saat melakukan registrasi.'
            });
        }
    };

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="bg-blue-gradient2 lg:w-1/3 flex flex-col items-center justify-center p-4 lg:p-0">
                <img src="/sismi-lbi.svg" alt="sismi-lbi" className="w-3/4 lg:w-8/12 pb-10"/>
                <img src="/logo-mhs.svg" alt="bg-login-mahasiswa" className="object-cover w-7/12 pt-10 hidden lg:block"/>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col items-center overflow-y-auto h-full lg:h-screen hide-scrollbar">
                <p className='text-primary font-black text-3xl pt-20 pb-10 text-center'>Silahkan Daftarkan Dirimu</p>
                <div className="flex flex-col justify-center w-full px-4 lg:px-40">
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        <Input label='Nama Lengkap' name='nama_mahasiswa' placeholder='Masukan Nama Anda' value={nama_mahasiswa} onChange={(e) => setNamaMahasiswa(e.target.value)} className='text-lg pb-2 text-secondary text-xl font-bold'/>
                        <Input label='Nomor Induk Mahasiswa (NIM)' name='nim_mahasiswa' placeholder='Masukan NIM Anda' className='text-lg pb-2 text-secondary text-xl font-bold' type='number' value={nim_mahasiswa} onChange={(e) => setNimMahasiswa(e.target.value)}/>
                        <Input label='Alamat' name='alamat_mahasiswa' placeholder='Masukan Alamat Anda' className='text-lg pb-2 text-secondary text-xl font-bold' type='text' value={alamat_mahasiswa} onChange={(e) => setAlamatMahasiswa(e.target.value)}/>
                        <InputFile label='Tanda Tangan' placeholder='Klik pilih untuk memilih tanda tangan' className='text-secondary text-xl font-bold' onChange={handleFileChange}/>
                        <InputPass label='Password' name='password_mahasiswa' placeholder='Masukan password anda' className='text-lg pb-2 text-secondary text-xl font-bold' value={password_mahasiswa} onChange={(e) => setPasswordMahasiswa(e.target.value)}/>
                        <Button className='bg-secondary w-full mt-5 mb-10 p-4' type='submit' label='Daftar'/>
                    </form>
                </div>
            </div>
        </div>
    );
}
