import Input from '../input/input'
import InputPass from '../input/inputPass'
import Button from '../button/button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import loginAdmin from '../../api/admin/loginAdmin'


export default function FormLogin ({label1, label2, gambar}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let result
        try {
            result = await loginAdmin(username, password)
            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    text: result.message,
                });
                navigate('/admin/akunPengguna')
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
                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <Input label={'Username'} name={'username'} placeholder={'Masukan username anda'} className={'text-lg pb-2'} onChange={(e) => setUsername(e.target.value)}/>
                            <InputPass label={'Kata Sandi'} name={'password'} placeholder={'Masukan password anda'} className={'text-lg pb-2'} onChange={(e) => setPassword(e.target.value)}/>
                            <Button className={'bg-secondary w-full mt-10 mb-10 p-4'} type={'submit'} label={'Masuk'}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
