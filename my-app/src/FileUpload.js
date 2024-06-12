// src/FileUpload.js
import React, { useState } from 'react';
import './FileUpload.css'; // Import the custom CSS file

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="file-upload-container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="No file chosen"
          aria-label="File input"
          aria-describedby="fileInputAddon"
          value={selectedFile ? selectedFile.name : ''}
          readOnly
        />
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button className="btn btn-primary" type="button" id="fileInputAddon" onClick={handleFileUpload}>
          Upload File
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
