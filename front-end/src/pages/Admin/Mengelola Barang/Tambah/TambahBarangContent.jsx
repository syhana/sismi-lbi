import Input from "../../../../components/input/input";
import InputPass from '../../../../components/input/inputPass';
import InputFile from "../../../../components/input/inputFile";
import InputSelect from "../../../../components/input/inputSelect";
import ButtonSimple from "../../../../components/button/button";

const data = [
  {
    id: 1,
    name: 'Tersedia',
  },
  {
    id: 2,
    name: 'Tidak Tersedia',
  }
];

export default function TambahBarangContent () {
  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Tambah Barang</p>
      <form action="" className="flex flex-col space-y-5">
        <Input label={'Nama Barang'} className={'text-primary text-base font-medium'} name={'nama_barang'} placeholder={'Masukan Nama Barang'} />
        <InputSelect data={data} label={'Status Barang'} defaultValue={data[0]} classLabel={''} />
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Tambah Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
