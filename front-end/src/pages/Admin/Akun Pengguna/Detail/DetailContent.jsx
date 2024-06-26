import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from "../../../../components/input/input";
import InputPass from '../../../../components/input/inputPass';
import InputSelect from "../../../../components/input/inputSelect";
import DetailAkunPengguna from '../../../../api/admin/Akun Pengguna/DetailAkunPengguna';

const roles = [
  { id: 1, name: 'Kepala Laboratorium' },
  { id: 2, name: 'Asisten' },
  { id: 3, name: 'Koordinator Asisten' },
];

export default function DetailContent() {
  const { nama } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await DetailAkunPengguna(nama);
        if (response.success) {
          setDetail(response.data);
        } else {
          console.log("Error fetching detail:", response.message);
        }
      } catch (error) {
        console.log("Error fetching detail:", error);
      }
    };

    fetchDetail();
  }, [nama]);

  if (!detail) {
    return <p>Loading...</p>;
  }

  const signatureSrc = detail.ttd_asisten ? `${import.meta.env.VITE_API_BASE_URL}/ttd/${detail.ttd_asisten}` : detail.ttd_kalab ? `${import.meta.env.VITE_API_BASE_URL}/ttd/${detail.ttd_kalab}` : '';

  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Detail Akun Pengguna</p>
      <form className="flex flex-col space-y-5">
        <Input 
          label={'NIP (*Jika Kepala Laboratorium)'} 
          className={'text-primary text-base font-medium'} 
          name={'nip_kalab'} 
          value={detail.nip_kalab || ''} 
          disabled={true} 
        />
        <Input 
          label={'Nama'} 
          className={'text-primary text-base font-medium'} 
          name={'nama'} 
          value={detail.nama_asisten || detail.nama_kalab || ''} 
          disabled={true} 
        />
        <InputPass 
          label={'Kata Sandi'} 
          className={'text-primary text-base font-medium'} 
          name={'password'} 
          value={'****'} 
          disabled={true} 
        />
        {signatureSrc && (
          <img src={signatureSrc} alt="Tanda Tangan" className="w-full md:w-1/2 pt-5" />
        )}
        <InputSelect 
          data={roles} 
          label={'Role'} 
          defaultValue={roles.find(role => role.name === (detail.dataRole?.nama_role || '')) || roles[0]} 
          classLabel={''} 
          disabled={true} 
        />
      </form>
    </div>
  );
}
