// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Decompiler</a>
        </div>
      </nav>
      <div className="container mt-4">
        <FileUpload />
      </div>
    </div>
  );
}

export default App;
