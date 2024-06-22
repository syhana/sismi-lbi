export default function Pdf({pdfUrl}) {
    return (
            <embed src={pdfUrl} className=" w-full h-svh pt-5 border-custom-red" />
    );
}
