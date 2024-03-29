"use client";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
}
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


const DropzoneUpload = (props) => {
    const [files, setFiles] = useState([]);
    const { fileRejections, acceptedFiles, getInputProps, getRootProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'application/pdf': ['.pdf']
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        maxFiles: 6
    });
    const AcceptedFiles = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} {console.log("FileDetail:", file)} bytes
        </li>
    ));
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}{console.log(e)}</li>
                ))}
            </ul>
        </li>
    ))

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);
    return (<section className="container">
        <Container {...getRootProps({ className: 'dropzone' })} >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </Container>
        <aside>
            <h4>Files</h4>
            <ul>{AcceptedFiles}</ul>
            <h4>Rejected files</h4>
            <ul>{fileRejectionItems}</ul>

        </aside>
        <aside style={thumbsContainer}>
            {thumbs}
        </aside>
    </section>
    )
}
export default DropzoneUpload;