import { useEffect, useState } from "react";
import TabelDisposisiKoor from "../../../components/table/TabelDisposisiKoor";
import ListDisposisi from "../../../api/Koordinator Asisten/ListDisposisi";

export default function DisposisiSuratContent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await ListDisposisi();
      if (response.success) {
        const transformedData = response.data.map((item, index) => ({
          id: index + 1, // If you need a sequential number
          nama_surat: item.dataSuratMhs.file_surat_mahasiswa,
          status_disposisi: item.status_disposisi,
          // Add other necessary fields if needed
        }));
        setData(transformedData);
      } else {
        console.log("Error fetching data:", response.message);
      }
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TabelDisposisiKoor
          bg_head={'bg-biruComplement'}
          className={'mt-10'}
          columns={columns}
          data={data}
          onView={'/koor/disposisiSurat/detail'}
          onTTD={'/koor/disposisiSurat/ttd'}
        />
      )}
    </div>
  );
}
