import InputSelect from '../../../components/input/inputSelect'
import ButtonSimple from '../../button/button';

export default function FormTambahDisposAsis() {

    const dataFileSurat = [
        {
            id: 1,
            name: 'Surat Peminjaman Rungan',
        },
        {
            id: 2,
            name: 'Surat Peminjaman Ruangan',
        },
    ];

    const dataTujuan = [
        {
            id: 'Kepala Laboratorium',
            name: 'Kepala Laboratorium',
        },
        {
            id: 'Koordinator Asisten',
            name: 'Koordinator Asisten',
        },
    ];

    return (
        <>
            <form className="">
                <div className="mb-6">
                    <InputSelect 
                        data={dataFileSurat} 
                        defaultValue={dataFileSurat[0]} 
                        label={'File Surat'} 
                        classLabel={'text-secondary font-bold text-xl pb-2'} 
                    />
                </div>
                <div className="mb-6">
                    <InputSelect 
                        data={dataTujuan} 
                        defaultValue={dataTujuan[0]} 
                        label={'Tujuan Disposisi'} 
                        classLabel={'text-secondary font-bold text-xl pb-2'} 
                    />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple 
                        className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} 
                        label={'Tambah Disposisi'} 
                        type={'submit'} 
                    />
                </div>
            </form>
        </>
    );
}
