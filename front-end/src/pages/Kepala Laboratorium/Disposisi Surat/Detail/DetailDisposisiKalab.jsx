import SidebarKalab from "../../../../components/sidebar/Kalab/Sidebar";
import Pdf from "../../../../components/elements/Pdf";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DetailDisposisiKoor (){
    const navigate = useNavigate()
    const { file_surat } = useParams()
    const [pdfUrl, setPdfUrl] = useState(`/api/fileSuratMahasiswa/${file_surat}`)

    useEffect(() => {
        const token = localStorage.getItem('tokenKalab');
        if (!token) {
            navigate('/notAllowed')
        }
    }, [navigate])

    useEffect(() => {
        const checkPdfUrl = async () => {
            try {
                const response = await fetch(pdfUrl);
                if (!response.ok) {
                    throw new Error('File not found');
                }
            } catch (error) {
                console.error('Error checking PDF URL:', error);
                setPdfUrl(`/api/fileSuratKeluar/${file_surat}`);
            }
        };

        checkPdfUrl();
    }, [pdfUrl, file_surat])

    return (
        <>
            <SidebarKalab profile={'/profile/kalab'} nama_kalab={'Kepala Laboratorium'} >
                <div className="p-10 ps-12">
                    <p className="text-primary font-bold text-3xl">Lihat Surat</p>
                    <p className="pt-5 text-secondary font-bold  text-lg">File Surat (<span className="text-red">.pdf</span>)</p>
                    <Pdf pdfUrl={pdfUrl}/>
                </div>
            </SidebarKalab>
        </>
    )
}

