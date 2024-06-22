import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabelAction from "./tableAction";
import AlertNotif from "../alert/AlertNotif";
import HapusSuratMasuk from "../../api/Asisten/Kelola Surat Masuk/HapusSuratMasuk";

export default function TabelSuratMasuk({ className, data, columns, bg_head, onView, onEdit}) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [posisToDelete, setPosisToDelete] = useState(null); 

    const showDeleteConfirmation = (id) => {
        setPosisToDelete(id); 
        setIsModalOpen(true); 
    };

    const handleDeleteConfirmation = async () => {
        setIsModalOpen(false);
        try {
            await HapusSuratMasuk(posisToDelete);
            window.location.reload()
        } catch (error) {
            console.error("Error deleting akun:", error);

        }
    };
    const handleCancelDelete = () => {
        setIsModalOpen(false);
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
                            <td className="p-2">{row.file_surat}</td>
                            <td className="p-2">
                                <TabelAction
                                    onView={() => navigate(`${onView}/${row.id}`)}
                                    onEdit={() => navigate(`${onEdit}/${row.id}`)}
                                    onDelete={() => showDeleteConfirmation(row.id)}
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
