import Input from "../../../components/input/input"
import InputFile from "../../../components/input/inputFile"
import InputPass from "../../../components/input/inputPass"
import ButtonSimple from "../../../components/button/button"

export default function ProfileContent (){
    return (
        <>
        <div className="p-10">
            <form action="">
                 <div className="mb-6">
                    <Input label={'Nama Lengkap'} name={'nama_mahasiswa'} placeholder={'Syakina Triyana'} type={'text'} className={'text-secondary font-bold text-xl'} />
                </div>
                <div className="mb-6">
                    <Input label={'Nomor Induk Mahasiswa (NIM)'} name={'nim_mahasiswa'} placeholder={'2111522021'} type={'text'} className={'text-secondary font-bold text-xl'} />
                </div>
                <div className="mb-6">
                    <Input label={'Alamat'} name={'alamat_mahasiswa'} value={'2111522021'} placeholder={'Pauh'} type={'text'} className={'text-secondary font-bold text-xl'} />
                </div>
                <InputFile  placeholder={'Klik pilih untuk memilih tanda tangan'}/>
                <img src="#"/>
                <div className="flex w-full">
                    <InputPass label={'Password Lama'} className={'text-secondary text-xl font-bold'} classDiv={'pe-10'} name={'password_lama'} />
                    <InputPass label={'Password Baru'} className={'text-secondary text-xl font-bold'} name={'password_baru'} />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
                </div>
            </form>
        </div>
        </>
    )
}