import SidebarAsisten from "../../../components/sidebar/Asisten/Sidebar";
import Input from "../../../components/input/input";
import Pdf from "../../../components/elements/Pdf";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailDisposisi from "../../../api/Asisten/Disposisi Surat/DetailDisposisi";

export default function DetailDisposisiAsiten() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("tokenAsisten");
    if (!token) {
      navigate("/notAllowed");
    }
  }, [navigate]);

  const { id_disposisi } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await DetailDisposisi(id_disposisi);
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
  }, [id_disposisi]);

  if (!detail) {
    return <p>Loading...</p>;
  }

  const suratData = detail.dataSuratMhs || detail.dataSuratKeluar;
  const namaSurat = suratData?.nama_surat_mahasiswa || suratData?.nama_surat_keluar;
  const fileSurat = suratData?.file_surat_mahasiswa || suratData?.file_surat_keluar;
  const pdfUrl = detail.dataSuratMhs
    ? `/api/fileSuratMahasiswa/${fileSurat}`
    : `/api/fileSuratKeluar/${fileSurat}`;

  return (
    <>
      <SidebarAsisten profile={"/asisten/profile"} nama_asisten={"Nadini Annisa Byant"}>
        <div className="p-10 ps-12">
          <p className="text-primary font-bold text-3xl">Lihat Surat</p>
          <Input
            label={"Nama Surat"}
            className={"text-secondary text-lg font-bold pb-1"}
            name={"nama_surat_mahasiswa"}
            disabled={true}
            value={namaSurat}
          />
          <p className="pt-5 text-secondary font-bold text-lg">
            File Surat (<span className="text-red">.pdf</span>)
          </p>
          <Pdf pdfUrl={pdfUrl} />
        </div>
      </SidebarAsisten>
    </>
  );
}
