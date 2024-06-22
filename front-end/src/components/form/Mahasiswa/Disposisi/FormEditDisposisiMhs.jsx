import Input from '../../../input/input';
import ButtonSimple from '../../../button/button';
import InputSelect from '../../../../components/input/inputSelect'

export default function FormEditDisposisiMhs() {

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
                    <Input label={'File Surat'} name={'nama_surat_mahasiswa'} placeholder={'Surat Peminjaman Barang'} disabled={'true'} type={'text'} className={'text-secondary font-bold text-xl'} />
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
