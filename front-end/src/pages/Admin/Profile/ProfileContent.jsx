import Input from "../../../components/input/input";
import InputPass from '../../../components/input/inputPass';
import ButtonSimple from "../../../components/button/button";

export default function ProfileContent() {
  return (
    <div className="p-4 md:p-10 lg:px-14">
      <form action="" className="flex flex-col space-y-5">
        <Input label={'Username'} className={'text-primary text-base font-medium'} name={'nama'} placeholder={'Nadini Annisa Byant'} />
        <div className="">
            <InputPass label={'Password Lama'} className={'text-primary text-base font-medium'} name={'password_lama'} />
            <InputPass label={'Password Baru'} className={'text-primary text-base font-medium'} name={'password_baru'} />
        </div>
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
