import Input from "../../../components/input/input";
import InputPass from '../../../components/input/inputPass';
import ButtonSimple from "../../../components/button/button";
import DetailAkun from "../../../api/admin/Profile/DetailAkun";
import { useEffect, useState } from "react";
import UpdateAdmin from "../../../api/admin/Profile/UpdateAdmin";
import Swal from "sweetalert2";

export default function ProfileContent() {
  const [nama, setNama] = useState('');
  const [id_admin, setIdAdmin] = useState('');
  const [password_lama, setPasswordLama] = useState('');
  const [password_baru, setPasswordBaru] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await DetailAkun();
        if (response.success) {
          const data = response.data;
          setNama(data.username);
          setIdAdmin(data.id_admin);
        } else {
          console.log("Error fetching detail:", response.message);
        }
      } catch (error) {
        console.log("Error fetching detail:", error);
      }
    };
    fetchDetail();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UpdateAdmin(nama, password_lama, password_baru);
      if (response.success) {
        Swal.fire({
          icon: 'success',
          text: 'Data berhasil diperbarui',
        });
        setPasswordLama(''); 
        setPasswordBaru('');
        window.location.reload(); 
      } else {
        Swal.fire({
          icon: 'error',
          text: response.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Terjadi kesalahan saat memperbarui data',
      });
      console.log(error);
    }
  };

  return (
    <div className="p-4 md:p-10 lg:px-14">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <Input
          label={'Username'}
          className={'text-primary text-base font-medium'}
          name={'nama'}
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <div className="">
          <InputPass
            label={'Password Lama'}
            className={'text-primary text-base font-medium'}
            name={'password_lama'}
            placeholder={'****'}
            value={password_lama}
            onChange={(e) => setPasswordLama(e.target.value)}
          />
          <InputPass
            label={'Password Baru'}
            className={'text-primary text-base font-medium'}
            name={'password_baru'}
            value={password_baru}
            onChange={(e) => setPasswordBaru(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
