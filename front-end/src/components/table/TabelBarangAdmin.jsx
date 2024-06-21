import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabelAction from "./tableAction";
import AlertNotif from "../alert/AlertNotif";
import Badges from "../badges/badges";
import HapusBarang from "../../api/admin/Barang/HapusBarang";

export default function Tabel({ className, data, columns, bg_head, onView, onEdit}) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [posisToDelete, setPosisToDelete] = useState(null); 

    const showDeleteConfirmation = (id_barang) => {
        setPosisToDelete(id_barang); 
        setIsModalOpen(true); 
    };

    const handleDeleteConfirmation = async () => {
        setIsModalOpen(false);
        try {
            await HapusBarang(posisToDelete);
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
                            <td className="p-2">{row.nama_barang}</td>
                            <td className="p-2">
                                <Badges
                                    label={row.status_barang === "Tersedia" ? 'Tersedia' : 'Tidak Tersedia'}
                                    className={row.status_barang === "Tersedia" ? 'bg-tersedia text-white px-6 py-2' : 'bg-tidakTersedia text-white px-6 py-2'}
                                />
                            </td>
                            <td className="p-2">
                                <TabelAction
                                    onView={() => navigate(`${onView}/${row.id_barang}`)}
                                    onEdit={() => navigate(`${onEdit}/${row.id_barang}`)}
                                    onDelete={() => showDeleteConfirmation(row.id_barang)}
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
