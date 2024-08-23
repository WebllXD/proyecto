import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState({
    username: '',
    idNumber: '',
    idType: '',
    phoneNumber: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    if (!userId) {
      setError('User ID not found in localStorage');
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/bank/users/${userId}`);
        setUser(response.data);

        // Guardar los datos en localStorage
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('idNumber', response.data.idNumber);
        localStorage.setItem('idType', response.data.idType);
        localStorage.setItem('phoneNumber', response.data.phoneNumber);
        localStorage.setItem('address', response.data.address);
      } catch (err) {
        setError('Error fetching user data');
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const userId = localStorage.getItem('id');
    if (!userId) {
      setError('User ID not found in localStorage');
      return;
    }

    try {
      const response = await axios.put(`${apiUrl}/bank/users/${userId}`, user);
      setUser(response.data);
      
      // Guardar los datos actualizados en localStorage
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('idNumber', response.data.idNumber);
      localStorage.setItem('idType', response.data.idType);
      localStorage.setItem('phoneNumber', response.data.phoneNumber);
      localStorage.setItem('address', response.data.address);

      alert('Perfil actualizado con éxito');
    } catch (err) {
      setError('Error updating profile');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <h1>{user.username}</h1>
          <p>ID: {user.idNumber} - {user.idType}</p>
        </div>
      </div>

      <form onSubmit={handleUpdate}>
        <div className="profile-section">
          <h2>Datos Personales</h2>
          <div className="profile-card">
            <div className="mb-4">
              <label htmlFor="username" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="idNumber" className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                id="idNumber"
                name="idNumber"
                value={user.idNumber}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="idType" className="form-label">Tipo ID</label>
              <select
                className="form-control"
                id="idType"
                name="idType"
                value={user.idType}
                onChange={handleInputChange}
                required
                disabled={loading}
              >
                <option value=""> </option>
                <option value="Física">Física</option>
                <option value="Jurídica">Jurídica</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="form-label">Número de teléfono</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="address"
                name="address"
                value={user.address}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Cargando...' : 'Actualizar'}
            </button>
          </div>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UserProfile;
