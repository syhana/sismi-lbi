import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const Container = styled.section`
  .dropzone {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 12px;
    border-color: #435DC7;
    border-style: dashed;
    background-color:white;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
    width: 100%;
    height: ${props => props.dropzoneHeight || '231px'};
  }

  .dropzone:focus {
    border-color: #2196f3;
  }
  
  @media (max-width: 768px) {
    .dropzone {
      height: 150px; /* Ubah tinggi dropzone di layar kecil */
    }
  }
`;

function Previews({ onFileChange, icon, label, classLabel }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      onFileChange(acceptedFiles[0]); // Panggil onFileChange dengan file pertama
    }
  });

  const thumbs = files.map(file => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img
          src={file.preview}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Container className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <img src={icon} alt="" className='pb-5'/>
        <p className={`text-xl ${classLabel}`}>{label}</p>
      </div>
      <ThumbsContainer>
        {thumbs}
      </ThumbsContainer>
    </Container>
  );
}

export default Previews;
