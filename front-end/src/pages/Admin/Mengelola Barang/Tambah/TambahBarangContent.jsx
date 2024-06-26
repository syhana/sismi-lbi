import Input from "../../../../components/input/input";
import InputSelect from "../../../../components/input/inputSelect";
import ButtonSimple from "../../../../components/button/button";
import TambahDataBarang from "../../../../api/admin/Barang/TambahDataBarang";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function TambahBarangContent () {
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

  const navigate = useNavigate();
  const [nama_barang, setNamaBarang] = useState('');
  const [status_barang, setStatusBarang] = useState(data[0]);

  const handleStatusChange = (selectedStatus) => {
    setStatusBarang(selectedStatus);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await TambahDataBarang(nama_barang, status_barang.name);
      if (results.success) {
        Swal.fire({
          icon: 'success',
          text: results.message,
        });
        navigate('/admin/kelolaBarang');
      } else {
        Swal.fire({
          icon: 'error',
          text: results.message,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        text: error.message,
      });
    }
  };

  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Tambah Barang</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <Input
          label={'Nama Barang'}
          className={'text-primary text-base font-medium'}
          name={'nama_barang'}
          placeholder={'Masukan Nama Barang'}
          onChange={(e) => setNamaBarang(e.target.value)}
        />
        <InputSelect
          data={data}
          label={'Status Barang'}
          defaultValue={data[0]}
          classLabel={''}
          onChange={handleStatusChange}
        />
        <div className="flex justify-end">
          <ButtonSimple
            className={'bg-primary px-6 py-2 md:px-10 md:py-2'}
            label={'Tambah Data'}
            type={'submit'}
          />
        </div>
      </form>
    </div>
  );
}
