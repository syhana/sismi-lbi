import Input from "../../../../components/input/input";
import InputPass from '../../../../components/input/inputPass';
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

export default function DetailContent() {
  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Detail Akun Pengguna</p>
      <form action="" className="flex flex-col space-y-5">
        <Input label={'NIP (*Jika Kepala Laboratorium)'} className={'text-primary text-base font-medium'} name={'nip_kalab'} placeholder={'12345'} disabled={true} />
        <Input label={'Nama'} className={'text-primary text-base font-medium'} name={'nama'} placeholder={'Nadini Annisa Byant'} disabled={true} />
        <InputPass label={'Kata Sandi'} className={'text-primary text-base font-medium'} name={'password'} placeholder={'****'} disabled={true} />
        <img src="/public/img/ttd/sea cinema.png" alt="Tanda Tangan" className="w-full md:w-1/2 pt-5" />
        <InputSelect data={data} label={'Role'} defaultValue={data[0]} classLabel={''} disabled={true} />
      </form>
    </div>
  );
}
