import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Allbooks from './components/Allbooks';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <Allbooks />
              <InputForm />
            </>
)}
        />
        <Route path="/categories" element={(<Categories />)} />

      </Routes>

    </div>
  );
}

export default App;
