// src/FileUpload.js
import React, { useState } from 'react';
import './Decompiler.css';
import FileUploadBar from '../components/FileUploadBar';
import CheckboxWithContent from '../components/CheckboxWithContent';
import Navbar from '../components/Navbar';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAngr, setShowAngr] = useState(false);
  const [showGhidra, setShowGhidra] = useState(false);
  const [fileContent, setFileContent] = useState(''); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Read the file content
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <Navbar title="Decompiler"/>
      <div className="container mt-4">
      <FileUploadBar
        selectedFile={selectedFile}
        handleFileChange={handleFileChange}
        handleFileUpload={handleFileUpload}
      />
      <div className="row">
        <div className="col-md-6">
          <CheckboxWithContent
            label="Angr"
            show={showAngr}
            setShow={setShowAngr}
            fileContent={fileContent}
            language="c" 
          />
        </div>
        <div className="col-md-6">
          <CheckboxWithContent
            label="Ghidra"
            show={showGhidra}
            setShow={setShowGhidra}
            fileContent={fileContent}
            language="c" 
          />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default FileUpload;
