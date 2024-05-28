import Input from '../input/input'
import InputPass from '../input/inputPass'
import Button from '../button/button'
import InputFile from '../input/inputFile'

export default function FormRegisMhs (){
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="bg-blue-gradient2 lg:w-1/3 flex flex-col items-center justify-center p-4 lg:p-0">
                <img src="/public/sismi-lbi.svg" alt="sismi-lbi" className="w-3/4 lg:w-8/12 pb-10"/>
                <img src="/public/logo-mhs.svg" alt="bg-login-mahasiswa" className="object-cover w-7/12 pt-10 hidden lg:block"/>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col items-center overflow-y-auto h-full lg:h-screen hide-scrollbar">
                <p className='text-primary font-black text-3xl pt-20 pb-10 text-center'>Silahkan Daftarkan Dirimu</p>
                <div className="flex flex-col justify-center w-full px-4 lg:px-40">
                    <form action="" method='' className="space-y-6 w-full">
                        <Input label='Nama Lengkap' name='nama_mahasiswa' placeholder='Masukan Nama Anda' className='text-lg pb-2 text-secondary text-xl font-bold'/>
                        <Input label='Nomor Induk Mahasiswa (NIM)' name='nim_mahasiswa' placeholder='Masukan NIM Anda' className='text-lg pb-2 text-secondary text-xl font-bold' type='number'/>
                        <Input label='Alamat' name='alamat_mahasiswa' placeholder='Masukan Alamat Anda' className='text-lg pb-2 text-secondary text-xl font-bold' type='text'/>
                        <InputFile label='Tanda Tangan' placeholder='Klik pilih untuk memilih tanda tangan' className='text-secondary text-xl font-bold'/>
                        <InputPass label='Password' name='password_mahasiswa' placeholder='Masukan password anda' className='text-lg pb-2 text-secondary text-xl font-bold'/>
                        <Button className='bg-secondary w-full mt-5 mb-10 p-4' type='submit' label='Masuk'/>
                    </form>
                </div>
            </div>
        </div>
    )
}
