import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../../../components/input/input";
import InputPass from '../../../../components/input/inputPass';
import InputFile from "../../../../components/input/inputFile";
import ButtonSimple from "../../../../components/button/button";
import Example from '../../../../components/input/inputSelect'; 
import TambahAkunPengguna from '../../../../api/admin/Akun Pengguna/tambahAkunPengguna';
import Swal from 'sweetalert2';

const roles = [
  { id: 1, name: 'Kepala Laboratorium' },
  { id: 2, name: 'Asisten' },
  { id: 3, name: 'Koordinator Asisten' },
];

export default function TambahConten() {
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [role, setRole] = useState(roles[0]); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nip_kalab') {
      setNip(value);
    } else if (name === 'nama') {
      setNama(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire({
        icon: 'error',
        text: 'Silahkan upload file tanda tangan anda',
      });
      return;
    }
    if (!role || !role.name) {
      Swal.fire({
        icon: 'error',
        text: 'Role tidak valid',
      });
      return;
    }
    try {
      const response = await TambahAkunPengguna(file, nama, password, role.name, nip);
      if (response.success) {
          Swal.fire({
              icon: 'success',
              text: response.message,
          });
          navigate('/admin/akunPengguna')
      } else {
        Swal.fire({
          icon: 'error',
          text: response.message,
        });
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
          icon: 'error',
          text: error.message,
      });
    }
  };

  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Tambah Akun Pengguna</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <Input
          label={'NIP (*Jika Kepala Laboratorium)'}
          className={'text-primary text-base font-medium'}
          name={'nip_kalab'}
          placeholder={'Masukan NIP'}
          value={nip}
          onChange={handleInputChange}
        />
        <Input
          label={'Nama'}
          className={'text-primary text-base font-medium'}
          name={'nama'}
          placeholder={'Masukan Nama'}
          value={nama}
          onChange={handleInputChange}
        />
        <InputPass
          label={'Kata Sandi'}
          className={'text-primary text-base font-medium'}
          name={'password'}
          placeholder={'Masukan Kata Sandi'}
          value={password}
          onChange={handleInputChange}
        />
        <InputFile
          label={'Tanda Tangan'}
          placeholder={'Klik Pilih untuk memilih tanda tangan'}
          onChange={handleFileChange}
        />
        <Example
          data={roles}
          defaultValue={roles[0]} 
          label={'Role'}
          classLabel={''}
          onChange={handleRoleChange}
        />
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Tambah Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
