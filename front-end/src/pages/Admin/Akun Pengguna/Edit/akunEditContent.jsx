import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from "../../../../components/input/input";
import InputPass from '../../../../components/input/inputPass';
import InputFile from "../../../../components/input/inputFile";
import InputSelect from "../../../../components/input/inputSelect";
import ButtonSimple from "../../../../components/button/button";
import Swal from 'sweetalert2';
import DetailAkunPengguna from '../../../../api/admin/Akun Pengguna/DetailAkunPengguna';
import EditAkunPengguna from '../../../../api/admin/Akun Pengguna/EditAkunPengguna';

const roles = [
  { id: 1, name: 'Kepala Laboratorium' },
  { id: 2, name: 'Asisten' },
  { id: 3, name: 'Koordinator Asisten' },
];

export default function AkunEditContent() {
  const { nama } = useParams();
  const [detail, setDetail] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await DetailAkunPengguna(nama);
        if (response.success) {
          const data = response.data;
          setDetail(data);
          setName(data.nama_asisten || data.nama_kalab || '');
          setPassword('****');
          setRole(roles.find(role => role.name === (data.dataRole?.nama_role || '')) || roles[0]);
          setFileName(data.ttd_asisten || data.ttd_kalab || '');
        } else {
          console.log("Error fetching detail:", response.message);
        }
      } catch (error) {
        console.log("Error fetching detail:", error);
      }
    };

    fetchDetail();
  }, [nama]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await EditAkunPengguna(name, password, role.name, file, nama);
      if (response.success) {
        Swal.fire({
          icon: 'success',
          text: 'Data berhasil diperbarui',
        });
        navigate('/admin/akunPengguna');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nama') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Edit Akun Pengguna</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <Input
          label={'NIP (*Jika Kepala Laboratorium)'}
          className={'text-primary text-base font-medium'}
          name={'nip_kalab'}
          value={detail.nip_kalab || ''}
          onChange={handleInputChange}
          disabled={true}
        />
        <Input
          label={'Nama'}
          className={'text-primary text-base font-medium'}
          name={'nama'}
          value={name}
          onChange={handleInputChange}
        />
        <InputPass
          label={'Kata Sandi'}
          className={'text-primary text-base font-medium'}
          name={'password'}
          value={password}
          onChange={handleInputChange}
        />
        <InputFile
          label={'Tanda Tangan'}
          placeholder={fileName || 'Klik Pilih untuk memilih surat'}
          onChange={handleFileChange}
        />
        <InputSelect
          data={roles}
          label={'Role'}
          defaultValue={role}
          onChange={handleRoleChange}
        />
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
