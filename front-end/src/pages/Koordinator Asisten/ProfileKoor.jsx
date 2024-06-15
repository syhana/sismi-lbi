import Input from "../../components/input/input"
import InputFile from "../../components/input/inputFile"
import ButtonSimple from "../../components/button/button"
import InputPass from "../../components/input/inputPass"
import SidebarKoor from "../../components/sidebar/Koor/Sidebar"

export default function ProfileKoor (){
    return (
        <>
        <SidebarKoor profile={'/koor/profile'} nama_koor={'Nadini Annisa Byant'}>
        <div className="p-10">
            <form action="">
                 <div className="mb-6">
                    <Input label={'Nama Koordinator Asisten'} name={'nama_kalab'} placeholder={'Nadini Annisa Byant'} type={'text'} className={'text-secondary font-bold text-xl'} />
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
        </SidebarKoor>
        </>
    )
}