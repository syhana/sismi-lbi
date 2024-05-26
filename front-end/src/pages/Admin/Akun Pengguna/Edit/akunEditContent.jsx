import Input from "../../../../components/input/input";
import InputPass from '../../../../components/input/inputPass';
import InputFile from "../../../../components/input/inputFile";
import InputSelect from "../../../../components/input/inputSelect";
import ButtonSimple from "../../../../components/button/button";

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

export default function AkunEditContent() {
  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Edit Akun Pengguna</p>
      <form action="" className="flex flex-col space-y-5">
        <Input label={'NIP (*Jika Kepala Laboratorium)'} className={'text-primary text-base font-medium'} name={'nip_kalab'} placeholder={'12345'} />
        <Input label={'Nama'} className={'text-primary text-base font-medium'} name={'nama'} placeholder={'Nadini Annisa Byant'} />
        <InputPass label={'Kata Sandi'} className={'text-primary text-base font-medium'} name={'password'} placeholder={'****'} />
        <InputFile label={'Tanda Tangan'} placeholder={'Klik Pilih untuk memilih surat'} />
        <InputSelect data={data} label={'Role'} defaultValue={data[0]} classLabel={''} />
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Tambah Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
