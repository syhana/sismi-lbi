import Input from "../../../../components/input/input"
import Pdf from "../../../../components/elements/Pdf"
import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
import DetailSuratMhs from "../../../../api/mahasiswa/Kelola Surat/DetailSuratMhs"

export default function DetailSuratContent (){
    const {id_surat_mahasiswa} = useParams()
    const [detail,setDetail] = useState(null)
    useEffect(() => {
        const fetchDetail = async () => {
          try {
            const response = await DetailSuratMhs(id_surat_mahasiswa);
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
      }, [id_surat_mahasiswa]);
    
      if (!detail) {
        return <p>Loading...</p>;
      }
    return (
        <>
        <div className="p-10 ps-12">
                 <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                <Input label={'Nama Surat'} className={'text-secondary text-lg font-bold pb-1'} name={'nama_surat_mahasiswa'} disabled={'true'} value={detail.nama_surat_mahasiswa}/>
                <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span>.pdf)</span></p>
                <Pdf pdfUrl={`/api/fileSuratMahasiswa/${detail.file_surat_mahasiswa}`}/>
        </div>
        </>
    )
}