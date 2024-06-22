import { useState } from "react";
import Input from "../../../../components/input/input";
import InputSelect from "../../../../components/input/inputSelect";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DetailBarang from "../../../../api/admin/Barang/DetailBarang";

export default function DetailBarangContent() {
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

  const {id_barang} = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await DetailBarang(id_barang);
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
  }, [id_barang]);

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 md:p-10 lg:px-14">
      <p className="text-3xl text-primary font-bold pb-4 md:pb-8">Detail Data Barang</p>
      <form action="" className="flex flex-col space-y-5">
        <Input label={'Nama Barang'} className={'text-primary text-base font-medium'} name={'nama_barang'}  disabled={true} value={detail.nama_barang}/>
        <Input label={'Id Barang'} className={'text-primary text-base font-medium'} name={'id_barang'}  disabled={true} value={detail.id_barang}/>
        <InputSelect data={data} label={'Role'} defaultValue={data.find(datas => datas.name === (detail.status_barang || '')) || data[0]} 
        classLabel={''} disabled={true} />
      </form>
    </div>
  );
}
