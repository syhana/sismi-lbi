// TabelDisposisiMhs.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabelAction from "./tableAction";
import AlertNotif from "../alert/AlertNotif";
import Badges from "../badges/badges";  // Assuming Badges is in the same directory, adjust the path if needed

export default function TabelDisposisiMhs({ className, data, columns, bg_head, onEdit }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posisToDelete, setPosisToDelete] = useState(null);

  const showDeleteConfirmation = (id) => {
    setPosisToDelete(id);
    setIsModalOpen(true);
  };

  const handleDeleteConfirmation = () => {
    console.log("Menghapus data dengan id:", posisToDelete);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
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
              <td className="p-2">{row.tujuan_disposisi}</td>
              <td className="p-2">
                <Badges label={row.status_disposisi} className={getStatusColor(row.status_disposisi)} />
              </td>
              <td className="p-2">
                <TabelAction
                  onEdit={() => navigate(`${onEdit}/${row.id}`)}
                  onDelete={() => showDeleteConfirmation(row.id)}
                  showButtons={{ view: false, edit: true, delete: true }} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AlertNotif
        isOpen={isModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleDeleteConfirmation}
      />
    </div>
  );
}
