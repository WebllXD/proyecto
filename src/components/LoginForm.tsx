import '../styles/login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiUrl from '../apiUrl';

const LoginForm: React.FC = () => {
  const [username, setUsuario] = useState('');
  const [password, setContrasena] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(`${apiUrl}/bank/login`, {
        username,
        password,
      });

      
      localStorage.setItem('id', data.username);
      
     
      navigate('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Usuario o contraseña incorrectos.');
        } else {
          setError('Error en el servidor. Por favor, intenta nuevamente.');
        }
      } else {
        setError('Error desconocido. Por favor, intenta nuevamente.');
      }
      console.error('Error al iniciar sesión:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className={`login-form ${loading ? 'loading' : ''}`}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              value={username}
              onChange={(e) => setUsuario(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              value={password}
              onChange={(e) => setContrasena(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
