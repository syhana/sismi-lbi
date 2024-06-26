import React, { useEffect, useRef, useState } from 'react';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf';
import 'pdfjs-dist/build/pdf.worker.entry';
import Swal from 'sweetalert2';

const PDFViewer = ({ pdfUrl, onCoordinateChange }) => {
  const canvasRef = useRef(null);
  const [page, setPage] = useState(null);
  const scale = 1.5; // Gunakan konstanta skala

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const firstPage = await pdf.getPage(1);
        setPage(firstPage);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPDF();
  }, [pdfUrl]);

  useEffect(() => {
    const renderPage = async () => {
      if (page) {
        const viewport = page.getViewport({ scale, rotation: page.rotate });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      }
    };

    renderPage();
  }, [page, scale]);

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (canvas.width / rect.width); 
    const y = (event.clientY - rect.top) * (canvas.height / rect.height); 

    if (page) {
      const viewport = page.getViewport({ scale, rotation: page.rotate }); 
      const pdfX = x / scale; 
      const pdfY = (viewport.height - y) / scale; 

      const adjustedX = pdfX - 30; 
      const adjustedY = pdfY - 16;

      console.log(`Koordinat PDF X=${adjustedX}, Y=${adjustedY}`);

      onCoordinateChange(adjustedX, adjustedY);
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} onClick={handleCanvasClick} style={{ border: '1px solid black' }}></canvas>
    </div>
  );
};

export default PDFViewer;
