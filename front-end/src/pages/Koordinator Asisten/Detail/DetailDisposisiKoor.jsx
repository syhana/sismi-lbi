import SidebarKoor from "../../../components/sidebar/Koor/Sidebar"
import Pdf from "../../../components/elements/Pdf"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DetailDisposisiKoor (){
    const navigate = useNavigate()
    const { nama_surat } = useParams()
    const [pdfUrl, setPdfUrl] = useState(`/api/fileSuratMahasiswa/${nama_surat}`)

    useEffect(() => {
        const token = localStorage.getItem('tokenAsisten');
        if (!token) {
            navigate('/notAllowed')
        }
    }, [navigate])

    useEffect(() => {
        // Check if the initial pdfUrl is valid, if not, switch to the backup URL
        const checkPdfUrl = async () => {
            try {
                const response = await fetch(pdfUrl);
                if (!response.ok) {
                    throw new Error('File not found');
                }
            } catch (error) {
                console.error('Error checking PDF URL:', error);
                setPdfUrl(`/api/fileSuratKeluar/${nama_surat}`);
            }
        };

        checkPdfUrl();
    }, [pdfUrl, nama_surat])

    return (
        <>
            <SidebarKoor profile={'/koor/profile'} nama_koor={'Koordinator Asisten'} >
                <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span className="text-red">.pdf</span>)</p>
                    <Pdf pdfUrl={pdfUrl}/>
                </div>
            </SidebarKoor>
        </>
    )
}
