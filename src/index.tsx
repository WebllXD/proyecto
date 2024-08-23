import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import SignPage from './Pages/SignPage';
import Keys from './Pages/KeysPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';

import Contact from './Pages/CompanyRelated/Contact';
import Terms from './Pages/CompanyRelated/Terms';
import Privacy from './Pages/CompanyRelated/Privacy';

import Layout from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signpage" element={<SignPage />} />
          <Route path="/keys" element={<Keys />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
