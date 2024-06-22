import Input from '../input/input'
import InputPass from '../input/inputPass'
import Button from '../button/button'
import { useState } from 'react';
import LoginMahasiswa from '../../api/mahasiswa/LoginMhs';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



export default function FormLoginMhs (){
    const navigate = useNavigate()
    const [nim_mahasiswa, setNimMahasiswa] = useState('')
    const [password_mahasiswa, setPassMahasiswa] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const results = await LoginMahasiswa(nim_mahasiswa, password_mahasiswa)
            if (results.success) {
                Swal.fire({
                    icon: 'success',
                    text: results.message
                });
                navigate('/mahasiswa/generateSurat')
            } else {
                Swal.fire({
                    icon: 'error',
                    text: results.message
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                text: error.message
            });
        }
    }
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="bg-blue-gradient2 flex flex-col items-center justify-center w-full lg:w-1/3 h-1/3 lg:h-full p-4 lg:p-0 flex-shrink-0">
                <img src="/public/sismi-lbi.svg" alt="sismi-lbi" className="w-1/2 lg:w-auto"/>
                <img src={'/public/logo-mhs.svg'} alt="bg-login-mahasiswa" className="object-cover w-7/12 pt-10"/>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col items-center justify-center h-2/3 lg:h-full overflow-y-auto hide-scrollbar flex-shrink-0">
                <p className='text-primary font-black text-3xl pt-10 pb-5 lg:pt-20 lg:pb-10'>Selamat Datang Kembali</p>
                <div className="flex flex-col justify-center w-full">
                    <div className="px-4 sm:px-10 md:px-20 lg:px-40 w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input label={'Nomor Induk Mahasiswa (NIM)'} name={'nim_mahasiswa'} placeholder={'Masukan NIM Anda'} className={'text-lg pb-2 text-secondary text-xl font-bold'} type={'number'} value={nim_mahasiswa} onChange={(e) => setNimMahasiswa(e.target.value)}/>
                            <InputPass label={'Password'} name={'password_mahasiswa'} placeholder={'Masukan password anda'} className={'text-lg pb-2 text-secondary text-xl font-bold'} value={password_mahasiswa} onChange={(e) => setPassMahasiswa(e.target.value)}/>
                            <Button className={'bg-secondary w-full mt-5 p-4'} type={'submit'} label={'Masuk'}/>
                            <p className='text-complementary font-bold text-base text-center'>Belum memiliki akun? <a href="/regisMahasiswa"><span className='text-secondary'>Daftar</span></a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
