import Input from '../../../input/input';
import ButtonSimple from '../../../button/button';
import InputSelect from '../../../../components/input/inputSelect'
import DetailDisposisiMhs from '../../../../api/mahasiswa/Disposisi Surat/DetailDisposisiMhs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EditDisposisiMhs from '../../../../api/mahasiswa/Disposisi Surat/EditDisposisiMhs';
import Swal from 'sweetalert2';

export default function FormEditDisposisiMhs() {
    const dataTujuan = [
        {
            id: 'Kepala Laboratorium',
            name: 'Kepala Laboratorium',
        },
        {
            id: 'Koordinator Asisten',
            name: 'Koordinator Asisten',
        },
    ];

    const navigate = useNavigate()
    const {id_disposisi} = useParams()

    const [nama_surat_mahasiswa, setNama] = useState('')
    const [tujuan_disposisi, setTujuan] = useState(dataTujuan[0].name)
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailDisposisiMhs(id_disposisi);
            if (response.success) {
              const data = response.data;
              setDetail(data);
              setNama(data.dataSuratMhs.nama_surat_mahasiswa);
              setTujuan(data.tujuan_disposisi); 
            } else {
              console.log("Error fetching detail:", response.message);
            }
          } catch (error) {
            console.log("Error fetching detail:", error);
          }
        };
    
        fetchDetail();
      }, [id_disposisi]);

      const handleTujuanChange = (selectedTujuan) => {
        setTujuan(selectedTujuan.name); 
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await EditDisposisiMhs(detail.dataSuratMhs.id_surat_mahasiswa, tujuan_disposisi, id_disposisi); 
          if (response.success) {
            Swal.fire({
              icon: 'success',
              text: response.message
            });
            navigate('/mahasiswa/disposisiSurat');
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
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <Input label={'File Surat'} name={'nama_surat_mahasiswa'}  disabled={'true'} type={'text'} className={'text-secondary font-bold text-xl'} value={nama_surat_mahasiswa}/>
                </div>
                <div className="mb-6">
                    <InputSelect 
                        data={dataTujuan} 
                        defaultValue={dataTujuan.find(d => d.name === tujuan_disposisi)} 
                        label={'Tujuan Disposisi'} 
                        classLabel={'text-secondary font-bold text-xl pb-2'} 
                        onChange={handleTujuanChange} 
                    />
                </div>
                <div className="flex justify-end">
                    <ButtonSimple 
                        className={'bg-primary px-6 py-2 md:px-10 md:py-2 text-base'} 
                        label={'Simpan Disposisi'} 
                        type={'submit'} 
                    />
                </div>
            </form>
        </>
    );
}
