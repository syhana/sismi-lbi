import JenisSurat from "../../../components/button/JenisSurat";
import { useNavigate } from "react-router-dom";

export default function GenerateSuratContent() {
  const navigate = useNavigate();

    const handlePinjamBarangClick = () => {
        navigate("/mahasiswa/generateSurat/pinjamBarang");
    };

    const handlePinjamRuangClick = () => {
      navigate("/mahasiswa/generateSurat/pinjamRuang");
    };

    const handlePermohonanTAClick = () => {
      navigate("/mahasiswa/generateSurat/permohonanTA");
    };


  return (
    <>
      <div className="py-10 px-16">
        <p className="text-primary font-semibold text-3xl pb-4">Generate Surat</p>
        <p className="text-secondary font-semibold text-lg">Pilih jenis surat yang ingin di generate</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-8/12 gap-2">
          <div className="pe-10 pt-5">
            <JenisSurat label={'Surat Peminjaman Barang'} id={'1'} onClick={handlePinjamBarangClick}/>
          </div>
          <div className="pe-10 pt-5">
            <JenisSurat label={'Surat Peminjaman Ruangan'} id={'2'} onClick={handlePinjamRuangClick}/>
          </div>
          <div className="pe-10 pt-5">
            <JenisSurat label={'Surat Permohonan Pengerjaan TA'} id={'3'} onClick={handlePermohonanTAClick}/>
          </div>
        </div>
      </div>
    </>
  );
}
