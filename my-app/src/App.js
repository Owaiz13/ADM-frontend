import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import FileUpload from './FileUpload';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Decompiler</a>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/decompiler" element={<FileUpload />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <h1>Welcome to Decompiler!</h1>
    // Additional components or content here
  );
}

export default App;
