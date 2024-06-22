import Input from "../../components/input/input"
import InputFile from "../../components/input/inputFile"
import ButtonSimple from "../../components/button/button"
import InputPass from "../../components/input/inputPass"
import SidebarKoor from "../../components/sidebar/Koor/Sidebar"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DetailAkunKordas from "../../api/Koordinator Asisten/DetailAkunKordas"
import EditAkunKordas from "../../api/Koordinator Asisten/EditAkunKordas"
import Swal from "sweetalert2"

export default function ProfileKoor (){
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
          navigate('/notAllowed')
        }
      }, [navigate]); 

    const [nama_asisten, setNamaAsisten] = useState('')
    const [password_lama, setPasswordLama] = useState('')
    const [password_baru, setPasswordBaru] = useState('')
    const [ttd, setTtd] = useState('')
    const [fileTtd, setFileTtd] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailAkunKordas();
            if (response.success) {
              const data = response.data;
              setNamaAsisten(data.nama_asisten);
              setTtd(data.ttd_asisten);
            } else {
              console.log("Error fetching detail:", response.message);
            }
          } catch (error) {
            console.log("Error fetching detail:", error);
          }
        };
        fetchDetail();
      }, []);

      const handleFileChange = (selectedFile) => {
        setFileTtd(selectedFile);
        setTtd(selectedFile.name);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await EditAkunKordas(fileTtd, nama_asisten, password_lama, password_baru);
          if (response.success) {
            Swal.fire({
              icon: 'success',
              text: 'Data berhasil diperbarui',
            });
            window.location.reload()
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
        <SidebarKoor profile={'/koor/profile'} nama_koor={'Nadini Annisa Byant'}>
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                 <div className="mb-6">
                    <Input label={'Nama Koordinator Asisten'} name={'nama_asisten'}  type={'text'} className={'text-secondary font-bold text-xl'}  onChange={(e) => setNamaAsisten(e.target.value)}/>
                </div>
                <InputFile  placeholder={ttd || 'Klik Pilih untuk memilih surat'} onChange={handleFileChange}/>
                <img src={`/api/ttd/${ttd}`} className="w-1/2"/>
                <div className="flex w-full">
                    <InputPass label={'Password Lama'} className={'text-secondary text-xl font-bold'} classDiv={'pe-10'} name={'password_lama'} onChange={(e) => setPasswordLama(e.target.value)}/>
                    <InputPass label={'Password Baru'} className={'text-secondary text-xl font-bold'} name={'password_baru'} onChange={(e) => setPasswordBaru(e.target.value)}/>
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
                </div>
            </form>
        </div>
        </SidebarKoor>
        </>
    )
}