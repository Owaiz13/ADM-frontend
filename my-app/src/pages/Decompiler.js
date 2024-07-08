import React, { useState } from 'react';
import axios from 'axios';
import FileUploadBar from '../components/FileUploadBar';
import CheckboxWithContent from '../components/CheckboxWithContent';

function Decompiler() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAngr, setShowAngr] = useState(false);
  const [showGhidra, setShowGhidra] = useState(false);
  const [fileContentC, setFileContentC] = useState(''); 
  const [fileContentH, setFileContentH] = useState(''); // New state for .h content

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
  };

  const handleFileRequest = async () => {
    let checkbox = [];

    if (showGhidra) {
      checkbox.push("ghidra");
    }

    if (showAngr) {
      checkbox.push("angr");
    }

    try {
      const formData = new FormData();
      formData.append('sofile', selectedFile);
      formData.append('selections', JSON.stringify(checkbox));
      console.log(formData);

      // Simulating backend response
      const fileUrlC = "file:///C:/Users/Ira%20Sheth/Downloads/main.cpp";
      const fileUrlH = "file:///C:/Users/Ira%20Sheth/Downloads/main.h"; // URL for .h file

      const fileResponseC = await axios.get(fileUrlC);
      const fileResponseH = await axios.get(fileUrlH); // Fetch .h file content
      console.log(fileResponseC.data);
      console.log(fileResponseH.data);

      setFileContentC(fileResponseC.data);
      setFileContentH(fileResponseH.data); // Set .h content

    } catch (error) {
      console.error('Error fetching file:', error);
    }
  };

  const handleFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleSubmit = () => {
    if (selectedFile) {
      handleFileRequest();
    } else {
      console.log("No File Selected");
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <h3>DECOMPILER</h3>
        <FileUploadBar
          selectedFile={selectedFile}
          handleFileRequest={handleFileRequest}
          handleFileUpload={handleFileUpload}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
        />
        <div className="row">
          <div className="col-md-6">
            <CheckboxWithContent
              label="Angr"
              show={showAngr}
              setShow={setShowAngr}
              fileContent={fileContentC}
              language="c" 
            />
          </div>
          <div className="col-md-6">
            <CheckboxWithContent
              label="Ghidra"
              show={showGhidra}
              setShow={setShowGhidra}
              fileContent={fileContentC}
              additionalContent={fileContentH} // Pass .h content
              language="c" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decompiler;
