import Input from "../../../components/input/input"
import InputFile from "../../../components/input/inputFile"
import InputPass from "../../../components/input/inputPass"
import ButtonSimple from "../../../components/button/button"
import { useState, useEffect } from "react"
import DetailAkunMhs from "../../../api/mahasiswa/Profile/DetailAkunMhs"
import UpdateAkunMhs from "../../../api/mahasiswa/Profile/UpdateAkunMhs"
import Swal from "sweetalert2"

export default function ProfileContent (){
    const [nama_mahasiswa, setNama] = useState('')
    const [nim_mahasiswa, setNIM] = useState('')
    const [alamat_mahasiswa, setAlamat] = useState('')
    const [password_lama, setPasswordLama] = useState('')
    const [password_baru, setPasswordBaru] = useState('')
    const [ttd, setTtd] = useState('')
    const [fileTtd, setFileTtd] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailAkunMhs();
            if (response.success) {
              const data = response.data;
              setNama(data.nama_mahasiswa);
              setNIM(data.nim_mahasiswa)
              setAlamat(data.alamat_mahasiswa)
              setTtd(data.ttd_mahasiswa);
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
          const response = await UpdateAkunMhs(nama_mahasiswa, alamat_mahasiswa, password_lama, password_baru, fileTtd);
          if (response.success) {
            Swal.fire({
              icon: 'success',
              text: response.message
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
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                 <div className="mb-6">
                    <Input label={'Nama Lengkap'} name={'nama_mahasiswa'} type={'text'} className={'text-secondary font-bold text-xl'} onChange={(e) => setNama(e.target.value)} value={nama_mahasiswa}/>
                </div>
                <div className="mb-6">
                    <Input label={'Nomor Induk Mahasiswa (NIM)'} name={'nim_mahasiswa'} type={'text'} className={'text-secondary font-bold text-xl'} onChange={(e) => setNIM(e.target.value)} value={nim_mahasiswa} disabled={true}/>
                </div>
                <div className="mb-6">
                    <Input label={'Alamat'} name={'alamat_mahasiswa'} type={'text'} className={'text-secondary font-bold text-xl'} onChange={(e) => setAlamat(e.target.value)} value={alamat_mahasiswa}/>
                </div>
                <InputFile placeholder={ttd || 'Klik Pilih untuk memilih surat'} onChange={handleFileChange}/>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/ttd/${ttd}`} className="w-1/2"/>
                <div className="flex w-full">
                    <InputPass label={'Password Lama'} className={'text-secondary text-xl font-bold'} classDiv={'pe-10'} name={'password_lama'} onChange={(e) => setPasswordLama(e.target.value)}/>
                    <InputPass label={'Password Baru'} className={'text-secondary text-xl font-bold'} name={'password_baru'} onChange={(e) => setPasswordBaru(e.target.value)}/>
                </div>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary px-6 py-2 md:px-10 md:py-2'} label={'Simpan Data'} type={'submit'} />
                </div>
            </form>
        </div>
        </>
    )
}