import Input from "../../../../components/input/input";
import InputSelect from "../../../../components/input/inputSelect";

const data = [
  {
    id: 1,
    name: 'Kepala Laboratorium',
  },
  {
    id: 2,
    name: 'Asisten',
  },
  {
    id: 3,
    name: 'Koordinator Asisten',
  },
];

export default function DetailBarangContent() {
  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Detail Data Barang</p>
      <form action="" className="flex flex-col space-y-5">
        <Input label={'Nama Barang'} className={'text-primary text-base font-medium'} name={'nama_barang'} placeholder={'Buku khasiat kesehatan'} disabled={true} />
        <Input label={'Id Barang'} className={'text-primary text-base font-medium'} name={'id_barang'} placeholder={'1234'} disabled={true} />
        <InputSelect data={data} label={'Role'} defaultValue={data[0]} classLabel={''} disabled={true} />
      </form>
    </div>
  );
}
