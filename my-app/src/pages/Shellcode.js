// src/App.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';

function Shellcode() {
  const title = "SHELL"; // Replace with your app title
  const shellcodes = [
    "LinuxARMAdd79bytes",
    "LinuxARMchmode39bytes",
    "LinuxARMcreat39bytes",
    "LinuxARMexecve35bytes",
    "LinuxARMexecve34bytes"

  ]; // Replace with your shellcode names

  const [selectedShellcode, setSelectedShellcode] = useState(null);
  const [shellcodeContent, setShellcodeContent] = useState('');

  const handleShellcodeClick = (shellcode) => {
    setSelectedShellcode(shellcode);
    fetchShellcodeContent(shellcode);
  };

  const fetchShellcodeContent = (shellcode) => {
    const sanitizedFilename = shellcode
      .replace(/[^a-zA-Z0-9]/g, '_')  // Replace non-alphanumeric characters with underscores
      .replace(/_+/g, '_');  // Replace multiple underscores with a single underscore
    fetch(`/shellcodes/${sanitizedFilename}.txt`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching shellcode content: ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => setShellcodeContent(text))
      .catch(error => console.error(error));
  };
  

  return (
    <div>
      <Navbar title={title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SidePanel shellcodes={shellcodes} onShellcodeClick={handleShellcodeClick} />
          </div>
          <div className="col-md-9 main-content">
            {selectedShellcode && (
              <div>
                <h2>{selectedShellcode}</h2>
                <pre>{shellcodeContent}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shellcode;
