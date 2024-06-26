import { useEffect, useState } from "react";
import TabelDisposisiKalab from "../../../components/table/TabelDisposisiKalab";
import ListDisposisiKalab from "../../../api/Kepala Laboratorium/Disposisi/ListDisposisiKalab";

export default function DisposisiSuratContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ListDisposisiKalab();
        if (response.success) {
          setData(response.data.map((item, index) => ({
            id: index + 1, 
            nama_surat: item.dataSuratMhs ? item.dataSuratMhs.file_surat_mahasiswa : (item.dataSuratKeluar ? item.dataSuratKeluar.file_surat_keluar : ''),
            status_disposisi: item.status_disposisi,
            id_disposisi: item.id_disposisi,
            jenisSurat: item.dataSuratMhs ? 'suratMahasiswa' : 'suratKeluar',
          })));
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { key: "no", label: "No" },
    { key: "nama_surat", label: "Nama Surat" },
    { key: "status_disposisi", label: "Status Disposisi" },
    { key: "action", label: "Aksi" },
  ];

  return (
    <div className="p-10 ps-12">
      <TabelDisposisiKalab
        bg_head={'bg-biruComplement'}
        className={'mt-10'}
        columns={columns}
        data={data}
        onView={'/kalab/disposisiSurat/detail'}
        onTTD={'/kalab/disposisiSurat/ttd'}
      />
    </div>
  );
}
