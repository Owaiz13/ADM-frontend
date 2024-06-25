// src/FileUpload.js
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './FileUpload.css'; // Import the custom CSS file

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAngr, setShowAngr] = useState(false);
  const [showGhidra, setShowGhidra] = useState(false);
  const [fileContent, setFileContent] = useState(''); // State to store the file content

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
      <div className="checkbox-container mb-3">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="angrCheck"
            checked={showAngr}
            onChange={() => setShowAngr(!showAngr)}
          />
          <label className="form-check-label" htmlFor="angrCheck">Angr</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="ghidraCheck"
            checked={showGhidra}
            onChange={() => setShowGhidra(!showGhidra)}
          />
          <label className="form-check-label" htmlFor="ghidraCheck">Ghidra</label>
        </div>
      </div>
      <div className="row">
        {showAngr && (
          <div className={showGhidra ? "col-md-6" : "col-md-12"}>
            <div className="code-box h-100">
              <h3>Angr</h3>
              <SyntaxHighlighter language="c" style={coy} showLineNumbers className="h-100">
                {fileContent}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
        {showGhidra && (
          <div className={showAngr ? "col-md-6" : "col-md-12"}>
            <div className="code-box h-100">
              <h3>Ghidra</h3>
              <SyntaxHighlighter language="c" style={coy} showLineNumbers className="h-100">
                {fileContent}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
