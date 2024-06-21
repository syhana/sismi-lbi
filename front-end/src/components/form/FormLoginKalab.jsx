import Input from '../input/input'
import InputPass from '../input/inputPass'
import Button from '../button/button'
import { useState } from 'react'
import Swal from 'sweetalert2'
import LoginKalab from '../../api/Kepala Laboratorium/LoginKalab'
import { useNavigate } from 'react-router-dom'

export default function FormLoginKalab ({label1, label2, gambar}){
    const [nip_kalab, setNipKalab] = useState('')
    const [password_kalab, setPasswordKalab] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let result
        try {
            result = await LoginKalab(nip_kalab, password_kalab)
            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    text: result.message,
                });
                navigate('/kalab/disposisiSurat')
            } else {
                Swal.fire({
                    icon: 'error',
                    text: result.message,
                });
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                text: error.message,
            });
        }
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="bg-blue-gradient lg:h-screen lg:w-1/3 flex items-center justify-center p-4 lg:p-0">
                <img src={gambar} alt="bg-login-admin" className="object-cover w-full lg:w-10/12"/>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col items-center">
                <div className="pt-10 lg:pt-20 flex justify-center w-full">
                    <img src="logo-sismi.svg" alt="logo-sismi" className="w-1/2 lg:w-1/5"/>
                </div>
                <div className="flex flex-col justify-center pt-10 lg:pt-20 w-full">
                    <p className="text-center text-secondary text-3xl font-semibold">Selamat Datang</p>    
                    <p className="text-center text-complementary pt-5">Silahkan masukan {label1} dan {label2} Anda</p>
                    <div className="px-4 lg:px-40 pt-10 w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input label={'NIP'} name={'nip_kalab'} placeholder={'Masukan nip akun anda'} className={'text-lg pb-2'} onChange={(e) => setNipKalab(e.target.value)}/>
                            <InputPass label={'Kata Sandi'} name={'password'} placeholder={'Masukan kata sandi anda'} className={'text-lg pb-2'} onChange={(e) => setPasswordKalab(e.target.value)}/>
                            <Button className={'bg-secondary w-full mt-10 mb-10 p-4'} type={'submit'} label={'Masuk'}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
