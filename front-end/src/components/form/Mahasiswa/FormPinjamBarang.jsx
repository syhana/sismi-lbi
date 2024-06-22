import Input from "../../input/input";
import InputSelect from '../../input/inputSelect';
import ButtonSimple from "../../../components/button/button";

const dataBarang = [
    {
      id: 1,
      name: 'Kursi Gaming',
    },
    {
      id: 2,
      name: 'TV Kabel',
    },
];

export default function FormPinjamBarang() {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-10">
            <p className="text-primary font-semibold text-3xl mb-8">Surat Peminjaman Barang</p>
            <form>
                <div className="mb-6">
                    <Input label={'Nama Surat'} name={'nama_generate'} placeholder={'Masukkan nama surat anda'} type={'text'} className={'text-secondary font-bold text-xl'} />
                </div>
                <div className="mb-6">
                    <InputSelect data={dataBarang} defaultValue={dataBarang[0]} label={'Barang yang Dipinjam'} classLabel={'text-secondary font-bold text-xl'} />
                </div>
                <div className="mb-6">
                    <Input label={'Tanggal Peminjaman Barang'} name={'tanggal_peminjaman_barang'} placeholder={'Pilih tanggal peminjaman Anda'} type={'date'} className={'text-secondary font-bold text-xl'} />
                </div>
                <div className="mb-6">
                    <Input label={'Keperluan Peminjaman Barang'} name={'keperluan_peminjaman_barang'} placeholder={'Masukkan keperluan peminjaman Anda'} type={'text'} className={'text-secondary font-bold text-xl'} />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} label={'Generate Surat'} type={'submit'} />
                </div>
            </form>
        </div>
    )
}
