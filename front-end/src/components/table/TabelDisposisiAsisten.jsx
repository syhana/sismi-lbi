import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badges from "../badges/badges"; 
import TabelActionAsisten from "./tableActionAsisten";
import MenolakDisposisi from "../../api/Asisten/Disposisi Surat/MenolakDiposisi";
import AlertTolak from "../alert/AlertTolak";
import SelesaiDisposisi from "../../api/Asisten/Disposisi Surat/SelesaiDisposisi";
import Alert from "../alert/Alert";
import Swal from "sweetalert2";
import KirimDisposisi from "../../api/Asisten/Disposisi Surat/KirimDisposisi";

export default function TabelDisposisiAsisten({ className, data, columns, bg_head, onView }) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [posisToTolak, setPosisToTolak] = useState(null);
  const [posisiToSelesai, setPosisiToSelesai ] = useState(null) 
  const [isModalSelesaiOpen, setIsModalSelesai] = useState(false)
  const [isModalKirimOpen, setIsModalKirim] = useState(false)
  const [posisiToKirim, setPosisiToKirim] = useState(false)


  const showSelesaiConfirmation = (id) => {
    setPosisiToSelesai(id); 
    setIsModalSelesai(true); 
};

  const showTolakConfirmation = (id) => {
      setPosisToTolak(id); 
      setIsModalOpen(true); 
  };

  const showKirimConfirmation = (id) => {
    setPosisiToKirim(id); 
    setIsModalKirim(true); 
};

  const handleTolakConfirmation = async () => {
      setIsModalOpen(false);
      try {
          await MenolakDisposisi(posisToTolak);
          window.location.reload()
      } catch (error) {
          console.error("Error deleting akun:", error);

      }
  };

  const handleSelesaiConfirmation = async () => {
    setIsModalSelesai(false);
    try {
        const response = await SelesaiDisposisi(posisiToSelesai);
        console.log(response);
        if (response.success) {
          Swal.fire({
            icon: 'success',
            text: response.message,
          });
        window.location.reload()
        } else {
          Swal.fire({
            icon: 'error',
            text: response.message,
          });
        }
    } catch (error) {
        console.error("Error deleting akun:", error);
    } 
  };

  const handleKirimConfirmation = async () => {
    setIsModalKirim(false);
    try {
        const response = await KirimDisposisi(posisiToKirim);
        console.log(response);
        if (response.success) {
          Swal.fire({
            icon: 'success',
            text: response.message,
          });
        window.location.reload()
        } else {
          Swal.fire({
            icon: 'error',
            text: response.message,
          });
        }
    } catch (error) {
        console.error("Error deleting akun:", error);
    } 
  };

  const handleCancelSelesai = () => {
    setIsModalSelesai(false);
  }; 

  const handleCanceTolak = () => {
      setIsModalOpen(false);
  }; 

  const handleCancelKirim = () => {
    setIsModalKirim(false);
};

  const getStatusColor = (status) => {
    switch (status) {
      case "menunggu":
        return "bg-biruLaut text-white px-5 py-2";
      case "TTD Kordas":
        return "bg-oren text-white px-5 py-2";
      case "TTD Kalab":
        return "bg-primary text-white px-5 py-2";
      case "ditolak":
        return "bg-redDark text-white px-5 py-2";
      case "Selesai":
        return "bg-tersedia text-white px-5 py-2";
      default:
        return "bg-gray-500 text-white px-5 py-2";
    }
  };

  return (
    <div>
      <table className={`table-auto ${className}`}>
        <thead className={`${bg_head}`}>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="p-4 border border-gray-300 text-left">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="p-5">{index + 1}</td>
              <td className="p-2">{row.nama_surat}</td>
              <td className="p-2">{row.pengirim}</td>
              <td className="p-2">
                <Badges label={row.status_disposisi} className={getStatusColor(row.status_disposisi)} />
              </td>
              <td className="p-2">
                <TabelActionAsisten 
                onView={() => navigate(`${onView}/${row.id}`)}
                onDecline={() => showTolakConfirmation(row.id)}
                onAcc={() => showSelesaiConfirmation(row.id)}
                onSend={() => showKirimConfirmation(row.id)}
                showButtons={{acc: true, decline: true, send: true , view:true}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AlertTolak
          isOpen={isModalOpen}
          onClose={handleCanceTolak} 
          onConfirm={handleTolakConfirmation}
      />
      <Alert
      label={'Apakah kamu ingin menyelesaikan disposisi ini'}
        isOpen={isModalSelesaiOpen}
        onClose={handleCancelSelesai}
        onConfirm={handleSelesaiConfirmation}
      />
      <Alert
      label={'Apakah kamu ingin mengirimkan disposisi ini'}
        isOpen={isModalKirimOpen}
        onClose={handleCancelKirim}
        onConfirm={handleKirimConfirmation}
      />
    </div>
  );
}
