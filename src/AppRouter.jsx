import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Parallax } from './parallax/parallax-2/Parallax';
import { Puntos } from './parallax/parallax-2/Puntos';
import { Donaciones } from './parallax/parallax-2/Donaciones';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Parallax />} />
        <Route path="/puntos" element={<Puntos />} />
        <Route path="/donaciones" element={<Donaciones />} />
      </Routes>
    </Router>
  );
};
