import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RegistrationForm from './pages/RegistrationForm';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}
