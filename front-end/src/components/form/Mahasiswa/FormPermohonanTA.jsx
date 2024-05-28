import Input from "../../input/input";
import ButtonSimple from "../../../components/button/button";

export default function FormPermohonanTA (){
    return (
        <>
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-10">
            <p className="text-primary font-semibold text-3xl mb-8">Surat Permohonan Pengerjaan TA</p>
            <form>
                <div className="mb-6">
                    <Input label={'Nama Surat'} name={'nama_generate'} placeholder={'Masukkan nama surat anda'} type={'text'} className={'text-secondary font-bold text-xl'} />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} label={'Generate Surat'} type={'submit'} />
                </div>
            </form>
        </div>
        </>
    )
}