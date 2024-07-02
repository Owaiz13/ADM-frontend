import React, { useState } from 'react';
import axios from 'axios';
import FileUploadBar from '../components/FileUploadBar';
import CheckboxWithContent from '../components/CheckboxWithContent';

function Decompiler() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAngr, setShowAngr] = useState(false);
  const [showGhidra, setShowGhidra] = useState(false);
  const [fileContent, setFileContent] = useState(''); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile)
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
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('sofile', selectedFile);
      formData.append('selections', JSON.stringify(checkbox));
      console.log(formData)

      // Send the request to the backend
      // const response = await axios.post('BACKEND_URL', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      const fileUrl = "file:///C:/Users/Ira%20Sheth/Downloads/main.cpp"; // Adjust this based on your backend response structure

      // Fetch the file content from the received URL
      const fileResponse = await axios.get(fileUrl);
      console.log(fileResponse.data)
      setFileContent(fileResponse.data);

    } catch (error) {
      console.error('Error fetching file:', error);
    }
  };

  const handleFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileUploadClick = () => {
    handleFileUpload();
  
    handleFileRequest();
    
    // else{
    //   console.log("No File Selected")
    // }
    
  };

  return (
    <div>
      <div className="container mt-4">
        <h3>DECOMPILER</h3> {/* Added heading */}
        <FileUploadBar
          selectedFile={selectedFile}
          handleFileRequest={handleFileRequest}
          handleFileUpload={handleFileUploadClick}
          handleFileChange={handleFileChange}
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

export default Decompiler;
