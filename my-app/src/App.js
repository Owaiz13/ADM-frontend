import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Decompiler from './pages/Decompiler';
import JadxGUI from './pages/JadxGUI';
import Shellcode from './pages/Shellcode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/decompiler" element={<Decompiler />} />
        <Route path="/jadxgui" element={<JadxGUI />} />
        <Route path="/shellcode" element={<Shellcode />} />
      </Routes>
    </Router>
  );
}

export default App;