import Input from "../../../../components/input/input"
import Pdf from "../../../../components/elements/Pdf"
import InputFile from "../../../../components/input/inputFile"
import ButtonSimple from "../../../../components/button/button"
import DetailSuratMhs from "../../../../api/mahasiswa/Kelola Surat/DetailSuratMhs"
import EditSuratMhs from "../../../../api/mahasiswa/Kelola Surat/EditSuratMhs"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


export default function EditSuratContent (){
  const navigate = useNavigate()
    const [detail,setDetail] = useState(null)
    const [nama_surat_mahasiswa, setNama] = useState('')
    const [file, setFile] = useState(null)
    const {id_surat_mahasiswa} = useParams()

    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailSuratMhs(id_surat_mahasiswa);
            if (response.success) {
              setNama(response.data.nama_surat_mahasiswa)
              setDetail(response.data);
            } else {
              console.log("Error fetching detail:", response.message);
            }
          } catch (error) {
            console.log("Error fetching detail:", error);
          }
        };
    
        fetchDetail();
      }, [id_surat_mahasiswa]);

      const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
      };

      if (!detail) {
        return <p>Loading...</p>;
      }

      const handleSubmit = async (e) => {
        e.preventDefault();    
        try {
          const response = await EditSuratMhs(nama_surat_mahasiswa, file, id_surat_mahasiswa);
          if (response.success) {
            Swal.fire({
              icon: 'success',
              text: response.message,
            });
            navigate('/mahasiswa/kelolaSurat')
          } else {
            Swal.fire({
              icon: 'error',
              text: response.message ,
            });
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            text: 'Terjadi kesalahan saat mengedit surat',
          });
          console.error('Error:', error);
        }
      }

    return (
        <>
        <div className="p-10 ps-12">
            <form onSubmit={handleSubmit}>
                <p className="text-primary font-bold text-3xl">Edit Surat</p>
                <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} value={nama_surat_mahasiswa} placeholder={'Surat Peminjaman Ruangan Nadini'} onChange={(e) => setNama(e.target.value)}/>
                <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf)</span></p>
                <Pdf pdfUrl={`/api/fileSuratMahasiswa/${detail.file_surat_mahasiswa}`}/>
                <InputFile  placeholder={ detail.file_surat_masuk || 'Klik pilih untuk memilih surat'} onChange={handleFileChange}/>
                <div className="flex justify-end">
                    <ButtonSimple className={'bg-primary font-semibold text-base text-white'} label={'Simpan Surat'} type={'submit'}/>
                </div>
            </form>
            
        </div>
        </>
    )
}