import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Videos } from '../pages/Videos';
import { Desafios } from '../pages/Desafios';
import { Cronograma } from '../pages/Cronograma';
import { Feedbacks } from '../pages/Feedbacks';
import { Navbar } from '../components/Navbar';

export function AppRoutes() {
  return (
    <Routes>      
      <Route path="/" element={<Navbar />}>
        <Route index element={<Videos />} />
        <Route path="desafios" element={<Desafios />} />
        <Route path="cronograma" element={<Cronograma />} />
        <Route path="feedbacks" element={<Feedbacks />} />
      </Route>
    </Routes>
  );
}
