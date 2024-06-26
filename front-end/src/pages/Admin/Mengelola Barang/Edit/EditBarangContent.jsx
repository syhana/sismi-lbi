import Input from "../../../../components/input/input";
import InputSelect from "../../../../components/input/inputSelect";
import ButtonSimple from "../../../../components/button/button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailBarang from "../../../../api/admin/Barang/DetailBarang";
import EditDataBarang from "../../../../api/admin/Barang/EditDataBarang";
import Swal from "sweetalert2";

export default function EditBarangContent () {
  const data2 = [
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
  const {id_barang} = useParams();
  const [nama_barang, setNamaBarang] = useState('');
  const [status_barang, setStatusBarang] = useState(data2[0].name);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await DetailBarang(id_barang);
        if (response.success) {
          const data = response.data;
          setDetail(data);
          setNamaBarang(data.nama_barang);
          setStatusBarang(data.status_barang); 
        } else {
          console.log("Error fetching detail:", response.message);
        }
      } catch (error) {
        console.log("Error fetching detail:", error);
      }
    };

    fetchDetail();
  }, [id_barang]);

  const handleStatusChange = (selectedStatus) => {
    setStatusBarang(selectedStatus.name); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await EditDataBarang(nama_barang, status_barang, id_barang); 
      if (response.success) {
        Swal.fire({
          icon: 'success',
          text: 'Data berhasil diperbarui',
        });
        navigate('/admin/kelolaBarang');
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
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Edit Data Barang</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <Input label={'Nama Barang'} className={'text-primary text-base font-medium'} name={'nama_barang'} value={nama_barang} onChange={(e) => setNamaBarang(e.target.value)}/>
        <InputSelect 
          data={data2} 
          label={'Status Barang'} 
          defaultValue={data2.find(d => d.name === status_barang)} 
          classLabel={''} 
          onChange={handleStatusChange} 
        />
        <div className="flex justify-end">
          <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
        </div>
      </form>
    </div>
  );
}
