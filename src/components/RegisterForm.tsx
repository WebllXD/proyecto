import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiUrl from '../apiUrl';



const RegisterForm: React.FC = () => {
  const [username, setUsuario] = useState('');
  const [password, setContrasena] = useState('');
  const [idNumber, setidNumber] = useState('');
  const [idType, setIdType] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [address, setaddress] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/bank/register`, {
        username,
        password,
        idNumber,
        idType,
        phoneNumber,
        address,

      });

      const { _id: adminId } = response.data;

      sessionStorage.setItem('adminId', adminId);
      navigate('/');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 500) {
        setError('Algo salió mal, por favor intenta nuevamente más tarde.');
      } else {
        setError('Credenciales inválidas');
      }
      console.error('Error al registrar:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`login-form ${loading ? 'loading' : ''}`}>
      <h2>Registro</h2>
      
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
        <div className="mb-3" >
        <label htmlFor="idNumber" className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            id="idNumber"
            value={idNumber}
            onChange={(e) => setidNumber(e.target.value)}
            required
            disabled={loading}
          />  
        </div>

        <div className="mb-3">
        <label htmlFor="tipoId" className="form-label">Tipo ID</label>
        <select
            className="form-control"
            id="tipoId"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            required
            disabled={loading}
        >
            <option value="">Seleccione su tipo de id</option>
            <option value="Física">Física</option>
            <option value="Jurídica">Jurídica</option>
        </select>
        </div>


        <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Número de teléfono</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            required
            disabled={loading}
          />

        </div>

        <div className="mb-3">
  <label htmlFor="correo" className="form-label">Email</label>
  <input
    type="email"
    className="form-control"
    id="correo"
    value={address}
    onChange={(e) => setaddress(e.target.value)}
    required
    disabled={loading}
  />
</div>


        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Cargando...' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;